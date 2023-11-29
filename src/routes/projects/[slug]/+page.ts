import { projectData, type IDs } from "$lib/projectData";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = function ({ params }) {
  const slug = params.slug.toLowerCase();
  if (slug === "order" || !(slug in projectData)) {
    throw error(404, "Not found");
  }

  return projectData[slug as IDs[number]];
};
