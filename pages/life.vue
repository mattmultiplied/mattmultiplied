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
            <div class="flex flex-col">
              <p><span class="mr-2">&#11093;</span> Yorkshire Three Peaks</p>
              <p class="ml-10 text-sm italic">- July 18th 2021 | <a href="https://gofund.me/28fd373e" class="underline" target="_blank" rel="nofollow">Donate</a></span></p>
            </div>
            <div class="flex flex-col">
              <p><span class="mr-2">&#11093;</span> Asda Foundation Leeds 10K</p>
              <p class="ml-10 text-sm italic">- September 5th 2021</p>
            </div>
            <div class="flex flex-col">
              <p><span class="mr-2">&#11093;</span> National Three Peaks</p>
              <p class="ml-10 text-sm italic">- Target Completion, 2022</p>
            </div>
            <div class="flex flex-col">
              <p><span class="mr-2">&#11093;</span> London Marathon</p>
              <p class="ml-10 text-sm italic">- Target Completion, 2023</p>
            </div>
            <div class="flex flex-col">
              <p><span class="mr-2">&#11093;</span> Mount Kilimanjaro</p>
              <p class="ml-10 text-sm italic">- Target Completion, 2025</p>
            </div>
            <div class="flex flex-col">
              <p><span class="mr-2">&#11093;</span> Lake District Wainwrights</p>
              <p class="ml-10 text-sm italic">- 2012 - Target Completion, 2026</p>
            </div>
          </div>
        </LayoutSection>

        <LayoutSection>
        <LayoutSubTitle>&#128247; Photography</LayoutSubTitle>
        <p class="-mt-4 mb-8">I post mainly on my <a class="inline-block font-bold transform hover:rotate-3 ease-in-out duration-150" href="https://www.instagram.com/mattmultiplied_adventures/" rel="nofollow" target="_blank">instagram</a>, but below are (what I think) my best.</p>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-12">
          <LayoutPhotoCard caption="Knaresborough Viaduct, 24th May 2021" link="/photography/knaresborough_viaduct_full.jpg" :image="require('~/assets/images/photography/knaresborough_viaduct_cover.jpg')" />
          <LayoutPhotoCard caption="St. Peter's Basilica, 6th July 2018" link="/photography/basilica_full.jpg" :image="require('~/assets/images/photography/basilica_cover.jpg')" />
          <LayoutPhotoCard caption="Cordoba, 12th July 2018" link="/photography/cordoba_full.jpg" :image="require('~/assets/images/photography/cordoba_cover.jpg')" />
          <LayoutPhotoCard caption="Seville, 11th July 2018" link="/photography/seville_full.jpg" :image="require('~/assets/images/photography/seville_cover.jpg')" />
          <LayoutPhotoCard caption="Seville, 11th July 2018" link="/photography/seville_structure_full.jpg" :image="require('~/assets/images/photography/seville_structure_cover.jpg')" />
          <LayoutPhotoCard caption="Naples, 8th July 2018" link="/photography/naples_full.jpg" :image="require('~/assets/images/photography/naples_cover.jpg')" />
        </div>
        </LayoutSection>

      </div>

      <Footer/>

  </div>
  
</template>

<script>
export default {}
</script>

