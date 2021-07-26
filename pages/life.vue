<template>
  <div>
      <Hook title="Exploring the world and sipping my life away one coffee at a time &#9749;"></Hook>

      <div class="container mx-auto px-4 py-8 md:px-16 md:pb-16 text-pink-600">

         <LayoutSection>
          <LayoutSubTitle>&#127956; About Me</LayoutSubTitle>
          <p>Outside of work, I'm a lover of the outdoors. From an early age, I've enjoyed hiking in the mountains of the Lake District. Since moving to West Yorkshire my latest adventures have been taking place across The Peak District and Yorkshire Dales.
          <br><br>
          I'm also an avid traveller taking any opportunity I can to either jet off abroad or visit one of the many UK beauty spots. I like a good challenge, so I've set myself some goals I want to achieve from countries to visit and mountains to hike. As I'm setting myself these challenges, I thought I might as well try and raise a little money for <a class="inline-block font-bold transform hover:rotate-3 ease-in-out duration-150" href="https://www.leedsmind.org.uk/" rel="nofollow" target="_blank">charity</a> too.</p>
        </LayoutSection>
        
        <LayoutSection>
        <LayoutSubTitle>&#128170; Challenges</LayoutSubTitle>
          <div class="grid lg:grid-cols-2 gap-x-12 gap-y-4">
            <LayoutListItem title="Yorkshire Three Peaks" description="July 18th 2021" complete="true" />
            <LayoutListItem title="Asda Foundation Leeds 10K" description="September 5th 2021"  />
            <LayoutListItem title="National Three Peaks" description="Target Completion, 2022"  />
            <LayoutListItem title="London Marathon" description="Target Completion, 2023"  />
            <LayoutListItem title="Mount Kilimanjaro" description="Target Completion, 2025"  />
            <LayoutListItem title="Lake District Wainwrights" description="2012 - Target Completion, 2026"  />
          </div>
        </LayoutSection>

        <LayoutSection>
        <LayoutSubTitle>&#128247; Photography</LayoutSubTitle>
        <p class="-mt-4 mb-8">I post mainly on my <a class="inline-block font-bold transform hover:rotate-3 ease-in-out duration-150" href="https://www.instagram.com/mattmultiplied_adventures/" rel="nofollow" target="_blank">instagram</a>, but below are (what I think) my best.</p>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-12">
          <LazyLayoutPhotoCard caption="Knaresborough Viaduct, 24th May 2021" link="/photography/knaresborough_viaduct_full.jpg" :image="require('~/assets/images/photography/knaresborough_viaduct_cover.jpg')" />
          <LazyLayoutPhotoCard caption="St. Peter's Basilica, 6th July 2018" link="/photography/basilica_full.jpg" :image="require('~/assets/images/photography/basilica_cover.jpg')" />
          <LazyLayoutPhotoCard caption="Cordoba, 12th July 2018" link="/photography/cordoba_full.jpg" :image="require('~/assets/images/photography/cordoba_cover.jpg')" />
          <LazyLayoutPhotoCard caption="Seville, 11th July 2018" link="/photography/seville_full.jpg" :image="require('~/assets/images/photography/seville_cover.jpg')" />
          <LazyLayoutPhotoCard caption="Seville, 11th July 2018" link="/photography/seville_structure_full.jpg" :image="require('~/assets/images/photography/seville_structure_cover.jpg')" />
          <LazyLayoutPhotoCard caption="Naples, 8th July 2018" link="/photography/naples_full.jpg" :image="require('~/assets/images/photography/naples_cover.jpg')" />
        </div>
        </LayoutSection>

      </div>

      <Footer/>

  </div>
  
</template>

<script>
export default {}
</script>

