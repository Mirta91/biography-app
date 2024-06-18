<script lang="ts">
	import AppTypewriter from "$lib/components/AppTypewriter.svelte";


  let showMore = true;

  let start = false;
  function toggleShowMore() {
    showMore = !showMore;
    start = true;
  }

  let htmlDesc =
  `     <p> TL; DR </p>
        <p>
            I was born in 1991 in Rijeka, Croatia. After finishing high school, I moved to the capital to start my studies at the <a href="https://www.tvz.hr/en/undergraduate-professional-study-in-information-technology/" target="_blank">Polytechnic University Zagreb</a>. A few years later, I proudly obtained my bachelor's degree in web development.
        </p>

        <p>
            After earning my degree, I spent a few months in the United States, where I improved my English and participated in various volunteering programs. This experience broadened my horizons and enhanced my communication skills, which I now leverage in my professional work.
        </p>

        <p>
            Upon returning home, I enrolled in the <a href="https://www.foi.unizg.hr/en" target="_blank">Faculty of Organization and Informatics</a> in Varaždin, a town in northern Croatia. FOI is part of the University of Zagreb and is renowned for its comprehensive programs that blend information technology with organizational studies. After two years of rigorous coursework and research, I obtained my master's degree, further solidifying my expertise in web development and information systems.
        </p>

        <p>
            During the last year of my master's degree, while writing my thesis, I started working in the marketing department of a textile company called <a href="https://www.textum-stoffe.com/index.php" target="_blank">Textum</a>. Although Textum did not have an in-house tech department, this role was a great opportunity for me. I worked closely with designers and the marketing team, gaining valuable insights into processes, communication flows, and collaboration. My tasks included optimizing slower processes in the company, developing software, and assisting the marketing team. This experience proved invaluable in my later career.
        </p>

        <p>
            Following my graduation, I reached out to the AIESEC organization and began looking for internships around Europe. I found an exciting opportunity in Barcelona at a startup called <a href="https://www.mocaplatform.com/" target="_blank">Moca Platform</a>. This role allowed me to immerse myself in the dynamic world of startups, where I gained valuable experience working in a tech team. During my time at Moca Platform, I honed my skills in Vue.js and Node.js.
        </p>

        <span> TBD </span>
   
            `;


</script>

<div class="container py-10 max-w-screen-md">
    <!-- <h3>Short story</h3> -->
     <div class="  py-6">
        <p class="font-bold">
            My name is Mirta Štefanac, I'm a web developer, conentrated on front-end technologies based in Valencia, Spain. I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
            <button 
                on:click={toggleShowMore}
                class="inline text-svOrange border-b border-svOrange hover:bg-svOrange hover:text-white">
                {showMore ? 'Show bio' : 'Hide bio'}
            </button>
        </p>

    </div>
    <div class="overflow-hidden flex flex-col gap-y-5 transition-all duration-300 ease-in-out {showMore ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-[1000px] opacity-1 overflow-auto'}">
    {#if start}
        <AppTypewriter text="{htmlDesc}" duration={15000} class="flex flex-col gap-y-3" />
    {/if}
   </div>
</div>

<style>
   
</style>