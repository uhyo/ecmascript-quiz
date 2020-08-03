import { ToCEntry, ToC } from "~/data/toc";

/**
 * Convert a ToC to a map from id to ToC entry.
 */
export const getToCMap = (toc: ToC): Map<string, ToCEntry> => {
  const result = new Map<string, ToCEntry>();
  for (const entry of iterateToCEntries(toc)) {
    if (entry.id) {
      result.set(entry.id, entry);
    }
  }
  return result;
};

/**
 * Iterate over all entries (including subentries) in given ToC.
 */
export function* iterateToCEntries(toc: ToC): Generator<ToCEntry, void> {
  for (const entry of toc) {
    yield entry;
    if (entry.children) {
      yield* iterateToCEntries(entry.children);
    }
  }
}
