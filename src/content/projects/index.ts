import { term1 } from "./term1";
import { term2 } from "./term2";
import { term3 } from "./term3";

export type { Project } from "./term1";

export const terms = [term1, term2, term3];

export function getTermBySlug(slug: string) {
  return terms.find((t) => t.slug === slug);
}
