<script lang="ts">
	import AppButton from "$lib/components/AppButton.svelte";
	import AppImage from "$lib/components/AppImage.svelte";
	import AppPopover from "$lib/components/AppPopover.svelte";
	import AppTypewriter from "$lib/components/AppTypewriter.svelte";
	import rijeka from '$lib/images/rijeka.jpg';
    import { fade } from 'svelte/transition'


  let showMore = true;

  let start = false;
  function toggleShowMore() {
    showMore = !showMore;
    start = true;
  }
  let introText =  `<p class="font-bold">My name is <span class="rainbow-text">Mirta</span>, I'm a web developer, concentrated on <u>front-end technologies</u> based in Valencia, Spain. I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>`;

  let showIntroText = false;
  setTimeout(() => {
    showIntroText = true;
  }, 1500);
</script>

<div class="container py-10 max-w-screen-md">
     <div class="pt-6 pb-10 min-h-[220px]">
        {#if showIntroText}
            <h3 class="text-xl pb-2 font-bold">👩‍💻 About me</h3>
            <AppTypewriter 
                text="{introText}" 
                duration={3000} 
                class="" />
            <span transition:fade={{ delay: 3000, duration: 300 }}>
                <AppButton
                    on:click={() => toggleShowMore()} 
                    text={showMore ? 'Show full bio' : 'Hide bio'}
                    class="inline relative bottom-1 text-svOrange border-b border-svOrange hover:bg-svOrange hover:text-white">
                </AppButton>
            </span>
        {/if}
    </div>
    <div class="overflow-hidden flex flex-col gap-y-5 transition-all duration-300 ease-in-out {showMore ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-[3000px] opacity-1 overflow-auto'}">
    {#if start}
        <div class="flex flex-col gap-y-3">
            <p> TL; DR </p>
            <p>
                I was born in 1991 in Rijeka
                <AppPopover class="">
                    <div class="">
                        <AppImage src={rijeka} alt="rijeka" class="w-full h-full object-cover"/>
                    </div>
                </AppPopover>, Croatia. After finishing high school, I moved to the capital to start my studies at the <a href="https://www.tvz.hr/en/undergraduate-professional-study-in-information-technology/" target="_blank">Polytechnic University Zagreb</a>
                <AppPopover  class="">
                    <AppImage src="https://www.tvz.hr/wp-content/uploads/2024/02/TVZ.jpg" alt="tvz" class="w-full h-full object-cover" />
                </AppPopover>. A few years later, I proudly obtained my bachelor's degree in web development.
            </p>

            <p>
                After earning my degree, I spent a few months in the United States, where I improved my English and participated in various volunteering programs. This experience broadened my horizons and enhanced my communication skills, which I now leverage in my professional work.
            </p>

            <p>
                Upon returning home, I enrolled in the <a href="https://www.foi.unizg.hr/en" target="_blank">Faculty of Organization and Informatics</a>
                <AppPopover  class="">
                    <AppImage src="https://ceciis.foi.hr/sites/default/files/Image%20gallery/ceciis-slider-8.jpg" alt="tvz" class="w-full h-full object-cover" />
                </AppPopover> in Varaždin, a town in northern Croatia. FOI is part of the University of Zagreb and is renowned for its comprehensive programs that blend information technology with organizational studies. After two years of rigorous coursework and research, I obtained my master's degree, further solidifying my expertise in web development and information systems.
            </p>

            <p>
                During the last year of my master's degree, while writing my thesis, I started working in the marketing department of a textile company based in Germany called <a href="https://www.textum-stoffe.com/index.php" target="_blank">Textum</a>. Although Textum did not have an in-house tech department, this role was a great opportunity for me. I worked closely with designers and the marketing team, gaining valuable insights into processes, communication flows, and collaboration. My tasks included optimizing slower processes in the company, developing software, and assisting the marketing team. This experience proved invaluable in my later career.
            </p>

            <p>
                Following my graduation, I reached out to the AIESEC organization and began looking for internships around Europe. I found an exciting opportunity in Barcelona at a startup called <a href="https://www.mocaplatform.com/" target="_blank">Moca Platform</a>. This role allowed me to immerse myself in the dynamic world of startups, where I gained valuable experience working in a tech team. During my time at Moca Platform, I honed my skills in Vue.js and Node.js.
            </p>

            <p>
                After my internship in Barcelona was over, I returned to Croatia and was offered a position at <a href="https://www.infosit.com/" target="_blank">Infosit</a>, a well-known software development company. I accepted the offer and have been working there for the past seven years.
                At Infosit, I started as a Junior Web Developer, slowly advancing to a Team Lead position due to my dedication and skill. Over the years, I have been involved in numerous projects, ranging from small websites to large-scale web applications. </p>
            <!--<ul>
                <li>Leading a team of 6</li>
                <li></li>
                <li>Introducing agile methodologies</li>
                <li>Code reviews and PRs</li>
                <li>Mentoring</li>
                <li>Supporting Project Management</li>
                <li></li>
                <li></li>
                <li></li>
                <li>Integrating APIs</li>
                <li>Testing and Debugging</li>
            </ul>-->
            <p>
                While working at Infosit, I was offered a contract job for the <a href="https://www.worldbank.org/" target="_blank">World Bank Group</a> organization. They wanted me to help implement the digitalization of government-to-business services in Croatia. This project aimed to develop digital procedures for business registration and licensing in Croatia.
            </p>
            <p>
                A year later, they contracted me again for a similar task in Palestine. And after that, for an in-house project in Washington. </p>
            
               <!--  This project was challenging for three reasons: 
                <ul>
                <li>Firstly, everything was in Arabic, so the web app had to support right-to-left text, making it hard to spot mistakes.</li>
                <li>Secondly, the app had to be fully optimized as internet access in Palestine is scarce; therefore, the forms for registering a business also had to be downloadable and printable.</li>
                <li>Thirdly, culturally it was a big challenge due to different work ethics, expectations, and ways of communicating.</li>
            </ul> -->
            <p>
                ...
            </p>
            <p> 
                This year I decide to make a big change in my life. I moved to Spain and I quit my job in Croatia.          
            </p>
            
        </div>
        <AppButton
            on:click={() => toggleShowMore()} 
            text={showMore ? 'Hide bio' : 'Hide bio'}
            class="w-[75px] block text-svOrange border-b border-svOrange hover:bg-svOrange hover:text-white">
        </AppButton>
    {/if}
   </div>
</div>

<style>
   
</style>