"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { GuideCard } from "../components/GuideCard";
import type { GuideSummary } from "../data/guides";
import { isNoteTopicSlug, noteTopics, type NoteTopicSlug } from "../data/note-topics";

type NotesExplorerProps = {
  guides: GuideSummary[];
};

function readLocation() {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");

  return {
    topic: isNoteTopicSlug(topic) ? topic : "all",
    query: params.get("q")?.trim() ?? "",
  } satisfies { topic: NoteTopicSlug; query: string };
}

function updateLocation(topic: NoteTopicSlug, query: string, mode: "push" | "replace") {
  const params = new URLSearchParams();
  if (topic !== "all") params.set("topic", topic);
  if (query.trim()) params.set("q", query.trim());

  const nextUrl = params.size ? `/notes?${params.toString()}` : "/notes";
  window.history[mode === "push" ? "pushState" : "replaceState"]({}, "", nextUrl);
}

export function NotesExplorer({ guides }: NotesExplorerProps) {
  const [activeTopic, setActiveTopic] = useState<NoteTopicSlug>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const syncFromLocation = () => {
      const next = readLocation();
      setActiveTopic(next.topic);
      setQuery(next.query);
    };

    syncFromLocation();
    window.addEventListener("popstate", syncFromLocation);
    return () => window.removeEventListener("popstate", syncFromLocation);
  }, []);

  const topicCounts = useMemo(
    () =>
      new Map(
        noteTopics.map((topic) => [
          topic.slug,
          topic.category ? guides.filter((guide) => guide.category === topic.category).length : guides.length,
        ]),
      ),
    [guides],
  );

  const visibleGuides = useMemo(() => {
    const topic = noteTopics.find((candidate) => candidate.slug === activeTopic) ?? noteTopics[0];
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return guides.filter((guide) => {
      if (topic.category && guide.category !== topic.category) return false;
      if (!normalizedQuery) return true;

      return [
        guide.title,
        guide.shortTitle,
        guide.dek,
        guide.answer,
        guide.category,
        guide.place,
        guide.season,
      ]
        .join(" ")
        .toLocaleLowerCase()
        .includes(normalizedQuery);
    });
  }, [activeTopic, guides, query]);

  function handleTopicClick(event: MouseEvent<HTMLAnchorElement>, topic: NoteTopicSlug) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    setActiveTopic(topic);
    updateLocation(topic, query, "push");
  }

  function handleSearch(value: string) {
    setQuery(value);
    updateLocation(activeTopic, value, "replace");
  }

  function resetExplorer() {
    setActiveTopic("all");
    setQuery("");
    updateLocation("all", "", "push");
  }

  return (
    <section className="notes-index" aria-labelledby="notes-library-title">
      <div className="notes-library-header">
        <div>
          <p className="eyebrow">Browse the library</p>
          <h2 id="notes-library-title">Find the note that fits the moment.</h2>
        </div>
        <label className="notes-search">
          <span>Search Plant Notes</span>
          <input
            type="search"
            value={query}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Plant, symptom, or situation"
          />
        </label>
      </div>

      <div className="topic-filter" aria-label="Filter Plant Notes by topic">
        {noteTopics.map((topic) => {
          const params = new URLSearchParams();
          if (topic.slug !== "all") params.set("topic", topic.slug);
          if (query.trim()) params.set("q", query.trim());
          const href = params.size ? `/notes?${params.toString()}` : "/notes";

          return (
            <Link
              className={activeTopic === topic.slug ? "active" : undefined}
              href={href}
              aria-current={activeTopic === topic.slug ? "page" : undefined}
              onClick={(event) => handleTopicClick(event, topic.slug)}
              key={topic.slug}
            >
              {topic.label}
              <small>{topicCounts.get(topic.slug) ?? 0}</small>
            </Link>
          );
        })}
      </div>

      <div className="notes-results-heading" aria-live="polite">
        <span>
          {visibleGuides.length} {visibleGuides.length === 1 ? "note" : "notes"}
        </span>
        {query ? <small>Matching &ldquo;{query}&rdquo;</small> : null}
      </div>

      {visibleGuides.length ? (
        <div className="article-grid">
          {visibleGuides.map((guide, index) => (
            <GuideCard guide={guide} featured={index === 0} key={guide.slug} />
          ))}
        </div>
      ) : (
        <div className="notes-empty">
          <p className="eyebrow">Nothing here yet</p>
          <h3>Try another plant name or browse every note.</h3>
          <button type="button" onClick={resetExplorer}>
            Show all Plant Notes
          </button>
        </div>
      )}
    </section>
  );
}
