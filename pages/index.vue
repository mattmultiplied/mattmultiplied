<template>

  <div class="lg:grid grid-cols-2 h-screen bg-pink-600">

    <div class="bg-indigo-800 bg-bottom overlay-background-blue">

      <div class="bg-cover bg-center background-image-matt py-24 w-full lg:h-screen border-b-8 border-blue-600 border-dashed">

        <div class="block lg:hidden w-64 h-64 mx-auto overflow-hidden rounded-full">
          
          <img class="" src="~/assets/images/matt_wheeler.jpg">

        </div>

      </div>

    </div>

    <div class="text-white px-4 md:px-16 py-16 xl:py-24 font-sans antialiased overlay-background-pink">

      <div class="mb-16">

        <h1 class="font-bold text-5xl">Hey, I'm Matt Wheeler</h1>
        <h2 class="font-bold text-xl">Graphic Designer &amp; Full-stack Developer</h2>
        <h3 class="font-bold text-sm uppercase tracking-wide opacity-75">Leeds, United Kingdom</h3>
      
      </div>
      
      <div class="mb-12">

        <h2 class="font-bold uppercase tracking-wide text-base mb-4">About me</h2>
        <p class="mb-4">My background is in Graphic &amp; Communication design achieving BA (IND) 1st Class Honours at The University of Leeds. Alongside this, I am a self-taught developer working in both front-end and back-end development. Have you got a project in mind or just fancy a chat? Send me an email and we can grab a coffee and support our local Leeds businesses.</p>
     
      </div>

      <div class="mb-12">

        <h2 class="font-bold uppercase tracking-wide text-base mb-4">Technical Tools</h2>
      
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          
          <ToolLaravel/>
          <ToolVue/>
          <ToolInertia/>
          <ToolTailwind/>
          <ToolPhaser/>
          <ToolCC/>

        </div>

      </div>

      <div class="mb-12">

        <h2 class="font-bold uppercase tracking-wide text-base mb-4">Projects</h2>

        <div class="md:grid grid-cols-2 md:grid-cols-2 gap-4">
          
          <a href="https://madeby.studio/" target="_blank" class="hover:pb-2 mb-8 block transform hover:-translate-y-1 duration-150">

            <img class="rounded-lg shadow-sm hover:shadow-lg transition-all duration-150 mb-4" rel="external" src="~/assets/images/madebystudio_cover.png" alt="madeby.studio">
            <h2 class="font-bold text-lg">madeby.studio</h2>
            <p>Co-Founder &amp; Director of madeby.studio, a Graphic Design &amp; Digital Development agency located in Leeds City Center, UK. I run the digital side realising client projects into the digital domain.</p>
          </a>

          <a href="https://www.instagram.com/drone_up_high/" rel="external" target="_blank" class="hover:pb-2 mb-8 block transform hover:-translate-y-1 duration-150">

            <img class="rounded-lg shadow-sm hover:shadow-lg transition-all duration-150 mb-4" src="~/assets/images/photography_cover.jpg" alt="Photography and Drone Experiments">
            <h2 class="font-bold text-lg">Drone Photography</h2>
            <p>Experiments into drone footage and birds eye view photography. Primarily a learning project for a bit of fun while out hiking or travelling. DJI Mavic Mini 2.</p>
          </a>

          <a href="https://madeby.studio/work/programming-meets-bespoke-contemporary-design/" rel="external" target="_blank" class="hover:pb-2 mb-8 block transform hover:-translate-y-1 duration-150">

            <img class="rounded-lg shadow-sm hover:shadow-lg transition-all duration-150 mb-4" src="~/assets/images/creative_codespace_cover.jpg" alt="Creative Codespace">
            <h2 class="font-bold text-lg">Creative Codespace</h2>
            <p>Experimental project bringing design and code together to create procedurally generated algorithmic designs. Currently working on more advanced generative patterns to compile into a design zine.</p>
          </a>

          <div class="hover:pb-2 mb-8 block transform hover:-translate-y-1 duration-150">

            <img class="rounded-lg shadow-sm hover:shadow-lg transition-all duration-150 mb-4" rel="external" src="~/assets/images/nanoids_cover.png" alt="Nanoids">
            <h2 class="font-bold text-lg">Nanoids <span class="text-sm opacity-50">Coming Soon</span></h2>
            <p>Phaser 3 project visualising NANO transactions through gamification. Game objects are spawned dynamically via each transaction confirmed on the NANO network.</p>
          </div>

        </div>

      </div>

      <div class="mb-12">

        <h2 class="font-bold uppercase tracking-wide text-base mb-4">Connect with me</h2>
        
        <div class="inline-block">

          <a href="https://medium.com/@mattmultiplied" aria-label="Medium - @mattmultiplied" target="_blank" rel="external" class="font-semibold hover:text-indigo-900 transition-color duration-150">
            <svg class="w-10 h-10 inline mr-4 fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 1391.4 1391.4" style="enable-background:new 0 0 1391.4 1391.4;" xml:space="preserve">
              <g id="Symbol">
                <path class="st2" d="M1086.3,120.5C975,44.8,840.5,0.5,695.7,0.5s-279.3,44.3-390.6,120C121.2,245.6,0.5,456.6,0.5,695.7
                  s120.7,450,304.5,575.1c111.3,75.8,245.8,120.1,390.6,120.1s279.3-44.3,390.6-120.1c183.8-125.1,304.5-336,304.5-575.1
                  S1270.2,245.6,1086.3,120.5z M950.5,974.5h-25.1c-75.4-12.1-134.6-131.9-134.6-278c0-154.1,65.9-279,147.2-279
                  c81.3,0,147.2,124.9,147.2,279C1085.1,842.6,1025.9,962.5,950.5,974.5z M370.5,416.8c30.5-10.8,63.3-16.6,97.5-16.6
                  c34.2,0,67,5.9,97.5,16.6C680,457.3,762.2,567.3,762.2,696.6c0,127.5-79.9,236.1-192,278c-31.9,11.9-66.3,18.4-102.3,18.4
                  c-36,0-70.4-6.5-102.3-18.4C262.5,936,186.6,841,175.1,726.8v-60.4C186.8,550.4,264.8,454.1,370.5,416.8z M1165.5,946.5
                  c-28.6,0-51.8-111.9-51.8-249.9s23.2-249.9,51.8-249.9c25.2,0,46.3,87.2,50.8,202.6v94.6C1211.7,859.3,1190.7,946.5,1165.5,946.5z"
                  />
              </g>
            </svg>
          </a>

          <a href="https://www.instagram.com/mattmultiplied/" aria-label="Instagram - @mattmultiplied" target="_blank" rel="external" class="font-semibold hover:text-indigo-900 transition-color duration-150">
            <svg class="w-10 h-10 inline mr-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
          </a>

          <a href="https://twitter.com/mattmultiplied" aria-label="Twitter - @mattmultiplied" target="_blank" rel="external" class="font-semibold hover:text-indigo-900 transition-color duration-150">
            <svg class="w-10 h-10 inline mr-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
          </a>

          <a href="https://www.linkedin.com/in/mattmultiplied/" aria-label="LinkedIn - @mattmultiplied" target="_blank" rel="external" class="font-semibold hover:text-indigo-900 transition-color duration-150">
           <svg class="w-10 h-10 inline mr-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
          </a>

          <a href="https://github.com/mattmultiplied" aria-label="Github - @mattmultiplied" target="_blank" rel="external" class="font-semibold hover:text-indigo-900 transition-color duration-150">
            <svg class="w-10 h-10 inline mr-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>          </a>
          <a class="inline-block font-semibold text-base hover:text-indigo-900 transition-color duration-150 lg:absolute mt-4" href="mailto:hello@mattmultiplied.com" target="_blank" rel="nofollow">hello@mattmultiplied.com</a>

        </div>

      </div>

    <span class="font-bold text-sm uppercase">&copy; Matt Wheeler, 2021</span>

    </div>
  
  </div>

</template>

<style>

  .font-sans {
    font-family: Nunito;
  }

  @screen lg {

    .background-image-matt {

      @apply bg-cover bg-top;
      background-image: url("~/assets/images/matt_wheeler.jpg");

    }

  }
  

  .overlay-background-pink {

    @apply bg-cover;
    background-image: url("~/assets/images/overlay_background_pink.svg");

  }

  .overlay-background-blue {

    @apply bg-cover;
    background-image: url("~/assets/images/overlay_background_blue.svg");

  }

  p {
    @apply font-semibold;
  }

</style>

<script>


export default {



}

