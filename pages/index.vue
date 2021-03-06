<template>
  <div>
    <Hook title="Helping brands figure out how to stay relevant in a digital world &#127757;"></Hook>

    <div class="container mx-auto px-4 py-8 md:px-16 md:pb-16 text-indigo-800">

      <LayoutSection>
        <LayoutSubTitle>&#128221; What I Do</LayoutSubTitle>
        <p>My background is in digital design &amp; web development with 8 years of combined experience across design and development. I spend my days designing brands, building websites and transforming ideas to the digital domain. Day-to-day I'm running the digital side of <a class="inline-block font-bold transform hover:rotate-3 ease-in-out duration-150" href="https://madeby.studio" rel="noreferrer" target="_blank">madeby.studio</a> maintaining, refining &amp; developing all things digital. If you want to look at the kind of things I work on, that's the place to go.
        <br><br>
        My primary focus is working on client brand strategies, digital experiences, conversion optimisation, search engine optimisation and user interface/experience design. I work with business owners to transform their ideas into fully-fledged digital solutions from conception, ideation to completion and rollout.</p>
      </LayoutSection>

      <LayoutSection>
        <LayoutSubTitle>&#128104; Technical Tools</LayoutSubTitle>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <ToolLaravel/>
          <ToolVue/>
          <ToolInertia/>
          <ToolTailwind/>
          <ToolPhaser/>
          <ToolCC/>
        </div>
      </LayoutSection>
     
      <LayoutSection>
        <LayoutSubTitle>&#128170; Areas of Expertise</LayoutSubTitle>
        <div class="grid lg:grid-cols-2 gap-x-12 gap-y-4">
          <p><span class="mr-2">&#9989;</span> Graphic &amp; Communication Design</p>
          <p><span class="mr-2">&#9989;</span> Brand Strategy</p>
          <p><span class="mr-2">&#9989;</span> User Interface &amp; Experience Design</p>
          <p><span class="mr-2">&#9989;</span> Website Development</p>
          <p><span class="mr-2">&#9989;</span> Application Development</p>
          <p><span class="mr-2">&#9989;</span> Conversion Optimisation</p>
          <p><span class="mr-2">&#9989;</span> Performance Optimisation</p>
          <p><span class="mr-2">&#9989;</span> Search Engine Optimisation</p>
          <p><span class="mr-2">&#9989;</span> Data Visualisation</p>
          <p><span class="mr-2">&#9989;</span> API Integrations</p>
        </div>
      </LayoutSection>

      <LayoutSection>
        <LayoutSubTitle>&#127912; Projects</LayoutSubTitle>
        <div class="grid lg:grid-cols-2 gap-12 text-xl">
          <LazyLayoutProjectCard title="madeby.studio" complete="true" description="Co-Founder &amp; Director of madeby.studio, a Graphic Design &amp; Digital Development agency located in Leeds City Center, UK. I run the digital side realising client projects into the digital domain." link="https://madeby.studio/" :image="require('~/assets/images/madebystudio_cover.png')" />
          <LazyLayoutProjectCard title="Travelling &amp; Photography" complete="true" description="Experiments into drone footage and birds eye view photography. Primarily a learning project for a bit of fun while out hiking or travelling. DJI Mavic Mini 2 and Canon EOS100D." link="https://www.instagram.com/mattmultiplied_adventures/" :image="require('~/assets/images/photography_cover.jpg')" />
          <LazyLayoutProjectCard title="Creative Codespace" complete="true" description="Experimental project bringing design and code together to create procedurally generated algorithmic designs. Currently working on more advanced generative patterns to compile into a design zine." link="https://madeby.studio/work/programming-meets-bespoke-contemporary-design/" :image="require('~/assets/images/creative_codespace_cover.jpg')" />
          <LazyLayoutProjectCard title="Appetiser" complete="false" description="A learning project to understand React Native and how to integrate it into Laravel functionalities such as Authentication and API's. Appetiser is going to be a simple food exploration app where you swipe on recipes." link="/" :image="require('~/assets/images/appestiser_cover.png')" />
        </div>
      </LayoutSection>

      <LayoutSection>
        <LayoutSubTitle>&#127942; Awards &amp; Recognitions</LayoutSubTitle>
        <div class="grid grid-cols-1 gap-x-12 gap-y-4  -mb-16">
          <LayoutListItem title="Leeds Digital Festival Thrive Award 2020 - 2021 Nominee" description="August 2021 | Leeds Digital Festival" complete="true" />
          <LayoutListItem title="Creative Industries Entrepreneur of the Year Awards Finalist" description="July 2021 | The Great British Entrepreneur Awards" complete="true" />
          <LayoutListItem title="SantanderX Entrepreneurship Awards - Nominee" description="May 2021 | SantanderX" complete="true" />
          <LayoutListItem title="Digital Enterprise Top 100" description="January 2021 | Digital Enterprise" complete="true" />
          <LayoutListItem title="Business Plan Competition - Third Prize Winner" description="April 2019 | The University of Leeds" complete="true" />
        </div>
      </LayoutSection>

    </div>

    <Footer/>
  </div>
</template>

<script>
export default {}
</script>

