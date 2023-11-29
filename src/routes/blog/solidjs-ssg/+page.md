---
layout: blog-default
title: How to Static Site Generation (SSG) with SolidJS
date: Mar 16, 2023
---

<script>
  import CoverImage from "$blog/solidjs-ssg/cover.png"
  import InstallPromptImage from "$blog/solidjs-ssg/install-prompt.png"
  import ProjectStructureImage from "$blog/solidjs-ssg/project-structure.png"
  import DistImage from "$blog/solidjs-ssg/dist.png"

  import SectionTitle from "../SectionTitle.svelte";
  import InlineCode from "../InlineCode.svelte";
  import BlockCode from "../BlockCode.svelte";
  import EmDash from "../EmDash.svelte";
  import CodeWithSyntaxHighlight from "../CodeWithSyntaxHighlight.svelte";
  
  import javascript from "svelte-highlight/languages/javascript";
  import { viteConfig } from "./constants"

  const tableOfContents = [ 
      { hash: "about-solid-start", title: "About SolidStart" },
      { hash: "install-solid-start", title: "Installing SolidStart" },
      { hash: "install-solid-start-static", title: "Installing the Static Adapter" },
      { hash: "enabling-adapter", title: "Enabling the Static Adapter" },
      { hash: "checking-output", title: "Statically Build the Project" },
  ]
</script>

<br/>
<SectionTitle hash="introduction" title="Introduction" />
<br/>
SolidJS is a slim JavaScript framework for building UIs.
<br/>
It's very performant and consistently beats many frameworks in the semi-famous <a href="https://krausest.github.io/js-framework-benchmark/" class="underline" target="_blank">JS framework benchmark repo</a>.
<br/>
<br/>
I personally enjoy using SolidJS & Vite for making client rendered Single Page Apps (SPA), but sometimes I want to push tools a little further.
<br/>
<br/>
<img class="mx-auto rounded-lg" alt="static rendering clipart" src={CoverImage} height="400" width="780" />
<br/>
We'll learn how to statically render SolidJS apps so the static elements of your app are generated as HTML at build time. This is great for SEO of text content-heavy websites like blogs & news articles.
<br/>
<br/>
<br/>
<br/>
<section>
<SectionTitle hash="table-of-contents" title="Table of Contents" />
<br />
<ol class="ml-12 leading-relaxed">
  {#each tableOfContents as section, i}
    <li>
      <a href="#{section.hash}" class="underline">
        {section.title}
      </a>
    </li>
  {/each}
</ol>
</section>

<br/>
<br/>
<br/>

<SectionTitle hash="about-solid-start" title="About SolidStart" />
<br/>
SolidStart is SolidJS's meta-framework. 
<br/>
Similar to Next/Remix for React, Nuxt for Vue, Sveltekit for Svelte, etc. <EmDash /> SolidJS has SolidStart.
<br/>
<br/>
I should warn that SolidStart is currently at <InlineCode>v0.3.1</InlineCode> and <b>not stable</b>.
<br/> 
This is why I usually prefer making client rendered apps with SolidJS & Vite over using SolidStart.
<br/> 
<br/> 
However if you don't venture too far into the experimental features, and use SolidStart as a router & static renderer for SolidJS, it is a pleasant experience!
<br/> 
<br/> 
We will set up SolidStart for static site generation and then statically build an example app.
<br/> 

<br/> 
<br/> 
<br/> 

<SectionTitle hash="install-solid-start" title="Installing SolidStart" />
<br/>
Let's begin by creating a new directory for the project:
<BlockCode>mkdir solid-ssg && cd solid-ssg</BlockCode>
<br/>
And install SolidStart:
<BlockCode>npm init solid@latest .</BlockCode>
<br/>
Select the <InlineCode>bare</InlineCode> template, and make sure to say <b>"Yes"</b> to Server Side Rendering!
<br/>
<br/>
<img loading="lazy" class="mx-auto rounded-lg" alt="answer yes to SolidStart server side rendering installation prompt" src={InstallPromptImage} height="73" width="498" />
<br/>
And then install dependencies:
<BlockCode>npm install</BlockCode>
<br/>
Great! You should now have a project structure that looks like this:
<br/>
<br/>
<img loading="lazy" class="mx-auto rounded-lg" alt="project structure of a newly installed SolidStart project" src={ProjectStructureImage} height="512" width="343" />

<br/> 
<br/> 
<br/> 

<SectionTitle hash="install-solid-start-static" title="Installing the Static Adapter" />
<br/> 
Our goal is to <em>statically</em> render the HTML at build time with SSG.
<br/> 
<br/> 
However the project is currently set up to <em>dynamically</em> render HTML with Server Side Rendering (SSR).
<br/> 
<br/> 
We will switch the rendering mode to SSG by using SolidStart's <a class="underline" href="https://github.com/solidjs/solid-start/tree/main/packages/start-static" target="_blank">official static adapter</a>.
<br/> 
<br/> 
Install the static adapter:
<BlockCode>npm install -D solid-start-static</BlockCode>
<br/> 
Next we need to tell the build process to use the static adapter.
<br/> 

<br/> 
<br/> 
<br/> 

<SectionTitle hash="enabling-adapter" title="Enabling the Static Adapter" />
<br/> 
Open the vite config file and add the static adapter plugin.
<br/>
<br/>
Here is my <InlineCode>vite.config.ts</InlineCode> :
<br/>
<CodeWithSyntaxHighlight language={javascript} code={viteConfig}/>
<br/>
This will configure Vite to run the static adapter at build time. 
<br/>
<br/>
SolidStart is now configured for SSG!
<br/> 
    
<br/> 
<br/> 
<br/> 

<SectionTitle hash="checking-output" title="Statically Build the Project" />
<br/> 
Let's build the project and inspect the output!
<br/> 
<br/> 
Build the project with vite:
<BlockCode>npm run build</BlockCode>
<br/> 
When finished, you should have a <InlineCode>dist</InlineCode> directory with the build output.
Static elements in your Solid components were built as HTML.
<br/> 
<br/>
The files inside the <InlineCode>/dist/public</InlineCode> are all your statically generated assets.
<br/> 
<br/> 
<img loading="lazy" class="mx-auto rounded-lg" alt="static rendering clipart" src={DistImage} height="330" width="328" />
<br/> 
You can upload the <InlineCode>public</InlineCode> folder to a CDN like Github Pages, Cloudflare, etc to host your project! 
