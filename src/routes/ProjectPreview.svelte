<script>
  import { projectList } from "$lib/projectData";
  import Carousel from "./Carousel.svelte";

  const projectPreviews = projectList.map((project) => project.carousel[0]);
</script>

<!-- <section -->
<!--   class="mx-8 hidden h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white sm:mt-[calc((500px_-_theme(space.14))_*_0.05)] sm:flex sm:h-[calc(500px_-_theme(space.14))] lg:mt-0 lg:h-[calc(100vh_-_theme(space.14))] lg:w-7/12" -->
<!-- > -->
<!--   <div class="flex h-[90%] w-full flex-col items-center justify-center rounded-xl bg-gray-400 transition ease-in-out dark:bg-slate-800"> -->
<!--     <Carousel data={projectPreviews} autoplay={true} loop={true} /> -->
<!--   </div> -->
<!-- </section> -->

<a
  href="/projects"
  class="mx-8 flex h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white xs:h-[calc(200px_-_theme(space.14))] sm:hidden"
>
  <div
    class="flex h-[90%] w-full flex-col items-center justify-center rounded-xl border-2 border-gray-400 transition ease-in-out dark:border-slate-800"
  >
    projects
  </div>
</a>
