import { c as create_ssr_component, v as validate_component, b as add_attribute, f as each, e as escape } from "../../../chunks/ssr.js";
/* empty css                                                       */
import { A as AppImage } from "../../../chunks/AppImage.js";
const svelte = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287'%20style='fill:%23fff'/%3e%3c/svg%3e";
const css3 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%231572B6'%20d='M19.67%2026l8.069%2090.493%2036.206%2010.05%2036.307-10.063L108.33%2026H19.67zm69.21%2050.488L86.53%2098.38l.009%201.875L64%20106.55v.001l-.018.015-22.719-6.225L39.726%2083h11.141l.79%208.766%2012.347%203.295-.004.015v-.032l12.394-3.495L77.702%2077H51.795l-.222-2.355-.506-5.647L50.802%2066h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235%2043h55.597l-.267%203.334-2.685%2030.154M89%2014.374L81.851%206H89V1H73v4.363L81.39%2013H73v5h16zm-19%200L63.193%206H70V1H55v4.363L62.733%2013H55v5h15zM52%2013h-8V6h8V1H38v17h14z'/%3e%3c/svg%3e";
const sass = "/_app/immutable/assets/sass.DKvQXNSD.svg";
const html5 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3ctitle%3eHTML5%20Logo%3c/title%3e%3cpath%20d='M108.4%200h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206%2023h-20.3V0h63.7v23H229v46h-23M259.5%200h24.1l14.8%2024.3L313.2%200h24.1v69h-23V34.8l-16.1%2024.8l-16.1-24.8v34.2h-22.6M348.7%200h23v46.2h32.6V69h-55.6'/%3e%3cpath%20fill='%23e44d26'%20d='M107.6%20471l-33-370.4h362.8l-33%20370.2L255.7%20512'/%3e%3cpath%20fill='%23f16529'%20d='M256%20480.5V131H404.3L376%20447'/%3e%3cpath%20fill='%23ebebeb'%20d='M142%20176.3h114v45.4h-64.2l4.2%2046.5h60v45.3H154.4M156.4%20336.3H202l3.2%2036.3%2050.8%2013.6v47.4l-93.2-26'/%3e%3cpath%20fill='%23fff'%20d='M369.6%20176.3H255.8v45.4h109.6M361.3%20268.2H255.8v45.4h56l-5.3%2059-50.7%2013.6v47.2l93-25.8'/%3e%3c/svg%3e";
const javascript = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23F0DB4F'%20d='M1.408%201.408h125.184v125.185H1.408z'/%3e%3cpath%20fill='%23323330'%20d='M116.347%2096.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32%204.784-4.355%207.925-3.403%202.023.678%203.938%202.237%205.093%204.724%205.402-3.498%205.391-3.475%209.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902%202.748-8.877%205.235-5.926%206.724-4.236%2018.492%202.975%2023.335%207.104%205.332%2017.54%206.545%2018.873%2011.531%201.297%206.104-4.486%208.08-10.234%207.378-4.236-.881-6.592-3.034-9.139-6.949-4.688%202.713-4.688%202.713-9.508%205.485%201.143%202.499%202.344%203.63%204.26%205.795%209.068%209.198%2031.76%208.746%2035.83-5.176.165-.478%201.261-3.666.38-8.581zM69.462%2058.943H57.753l-.048%2030.272c0%206.438.333%2012.34-.714%2014.149-1.713%203.558-6.152%203.117-8.175%202.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52%205.83c1.583%203.249%203.915%206.069%206.902%207.901%204.462%202.678%2010.459%203.499%2016.731%202.059%204.082-1.189%207.604-3.652%209.448-7.401%202.666-4.915%202.094-10.864%202.07-17.444.06-10.735.001-21.468.001-32.237z'/%3e%3c/svg%3e";
const typescript = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23fff'%20d='M22.67%2047h99.67v73.67H22.67z'/%3e%3cpath%20data-name='original'%20fill='%23007acc'%20d='M1.5%2063.91v62.5h125v-125H1.5zm100.73-5a15.56%2015.56%200%20017.82%204.5%2020.58%2020.58%200%20013%204c0%20.16-5.4%203.81-8.69%205.85-.12.08-.6-.44-1.13-1.23a7.09%207.09%200%2000-5.87-3.53c-3.79-.26-6.23%201.73-6.21%205a4.58%204.58%200%2000.54%202.34c.83%201.73%202.38%202.76%207.24%204.86%208.95%203.85%2012.78%206.39%2015.16%2010%202.66%204%203.25%2010.46%201.45%2015.24-2%205.2-6.9%208.73-13.83%209.9a38.32%2038.32%200%2001-9.52-.1%2023%2023%200%2001-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34%209.34%200%20011.15-.73L82%20101l3.59-2.08.75%201.11a16.78%2016.78%200%20004.74%204.54c4%202.1%209.46%201.81%2012.16-.62a5.43%205.43%200%2000.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48%2016.48%200%2001-3.43-6.25%2025%2025%200%2001-.22-8c1.33-6.23%206-10.58%2012.82-11.87a31.66%2031.66%200%20019.49.26zm-29.34%205.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19%2049.19%200%2001.12-5.17C29.08%2059%2039%2059%2051%2059h21.83z'/%3e%3c/svg%3e";
const vuejs = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20version='1.1'%20viewBox='0%200%20261.76%20226.69'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='matrix(1.3333%200%200%20-1.3333%20-76.311%20313.34)'%3e%3cg%20transform='translate(178.06%20235.01)'%3e%3cpath%20d='m0%200-22.669-39.264-22.669%2039.264h-75.491l98.16-170.02%2098.16%20170.02z'%20fill='%2341b883'/%3e%3c/g%3e%3cg%20transform='translate(178.06%20235.01)'%3e%3cpath%20d='m0%200-22.669-39.264-22.669%2039.264h-36.227l58.896-102.01%2058.896%20102.01z'%20fill='%2334495e'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const tailwind = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M64.004%2025.602c-17.067%200-27.73%208.53-32%2025.597%206.398-8.531%2013.867-11.73%2022.398-9.597%204.871%201.214%208.352%204.746%2012.207%208.66C72.883%2056.629%2080.145%2064%2096.004%2064c17.066%200%2027.73-8.531%2032-25.602-6.399%208.536-13.867%2011.735-22.399%209.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004%2064c-17.066%200-27.73%208.531-32%2025.602C6.402%2081.066%2013.87%2077.867%2022.402%2080c4.871%201.215%208.352%204.746%2012.207%208.66%206.274%206.367%2013.536%2013.738%2029.395%2013.738%2017.066%200%2027.73-8.53%2032-25.597-6.399%208.531-13.867%2011.73-22.399%209.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128%2071.371%2047.868%2064%2032.004%2064zm0%200'%20fill='%2338bdf8'/%3e%3c/svg%3e";
const nodejs = "/_app/immutable/assets/nodejs.CJ3H6Nm_.svg";
const mongodb = "/_app/immutable/assets/mongodb.C1CLCZqL.svg";
const vscode = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cmask%20id='a'%20width='128'%20height='128'%20x='0'%20y='0'%20maskUnits='userSpaceOnUse'%20style='mask-type:alpha'%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M90.767%20127.126a7.968%207.968%200%200%200%206.35-.244l26.353-12.681a8%208%200%200%200%204.53-7.209V21.009a8%208%200%200%200-4.53-7.21L97.117%201.12a7.97%207.97%200%200%200-9.093%201.548l-50.45%2046.026L15.6%2032.013a5.328%205.328%200%200%200-6.807.302l-7.048%206.411a5.335%205.335%200%200%200-.006%207.888L20.796%2064%201.74%2081.387a5.336%205.336%200%200%200%20.006%207.887l7.048%206.411a5.327%205.327%200%200%200%206.807.303l21.974-16.68%2050.45%2046.025a7.96%207.96%200%200%200%202.743%201.793Zm5.252-92.183L57.74%2064l38.28%2029.058V34.943Z'%20clip-rule='evenodd'/%3e%3c/mask%3e%3cg%20mask='url(%23a)'%3e%3cpath%20fill='%230065A9'%20d='M123.471%2013.82%2097.097%201.12A7.973%207.973%200%200%200%2088%202.668L1.662%2081.387a5.333%205.333%200%200%200%20.006%207.887l7.052%206.411a5.333%205.333%200%200%200%206.811.303l103.971-78.875c3.488-2.646%208.498-.158%208.498%204.22v-.306a8.001%208.001%200%200%200-4.529-7.208Z'/%3e%3cg%20filter='url(%23b)'%3e%3cpath%20fill='%23007ACC'%20d='m123.471%20114.181-26.374%2012.698A7.973%207.973%200%200%201%2088%20125.333L1.662%2046.613a5.333%205.333%200%200%201%20.006-7.887l7.052-6.411a5.333%205.333%200%200%201%206.811-.303l103.971%2078.874c3.488%202.647%208.498.159%208.498-4.219v.306a8.001%208.001%200%200%201-4.529%207.208Z'/%3e%3c/g%3e%3cg%20filter='url(%23c)'%3e%3cpath%20fill='%231F9CF0'%20d='M97.098%20126.882A7.977%207.977%200%200%201%2088%20125.333c2.952%202.952%208%20.861%208-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977%207.977%200%200%201%209.098-1.549L123.467%2013.8A8%208%200%200%201%20128%2021.01v85.982a8%208%200%200%201-4.533%207.21l-26.369%2012.681Z'/%3e%3c/g%3e%3cpath%20fill='url(%23d)'%20fill-rule='evenodd'%20d='M90.69%20127.126a7.968%207.968%200%200%200%206.349-.244l26.353-12.681a8%208%200%200%200%204.53-7.21V21.009a8%208%200%200%200-4.53-7.21L97.039%201.12a7.97%207.97%200%200%200-9.093%201.548l-50.45%2046.026-21.974-16.68a5.328%205.328%200%200%200-6.807.302l-7.048%206.411a5.336%205.336%200%200%200-.006%207.888L20.718%2064%201.662%2081.386a5.335%205.335%200%200%200%20.006%207.888l7.048%206.411a5.328%205.328%200%200%200%206.807.303l21.975-16.681%2050.45%2046.026a7.959%207.959%200%200%200%202.742%201.793Zm5.252-92.184L57.662%2064l38.28%2029.057V34.943Z'%20clip-rule='evenodd'%20opacity='0.25'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='b'%20width='144.744'%20height='113.408'%20x='-8.41115'%20y='22.5944'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='4.16667'/%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='overlay'%20result='effect1_dropShadow_1_36'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_1_36'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='c'%20width='56.6667'%20height='144.007'%20x='79.6667'%20y='-8.0035'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='4.16667'/%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='overlay'%20result='effect1_dropShadow_1_36'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_1_36'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='d'%20x1='63.9222'%20x2='63.9222'%20y1='0.329902'%20y2='127.67'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const npm = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23cb3837'%20d='M2%2038.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89%2036.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78%207.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z'/%3e%3c/svg%3e";
const azure = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%3e%3cpath%20fill='url(%23azure-devops-color-16__paint0_linear_707_116)'%20d='M15%203.622v8.512L11.5%2015l-5.425-1.975v1.958L3.004%2010.97l8.951.7V4.005L15%203.622zm-2.984.428L6.994%201v2.001L2.382%204.356%201%206.13v4.029l1.978.873V5.869l9.038-1.818z'/%3e%3cdefs%3e%3clinearGradient%20id='azure-devops-color-16__paint0_linear_707_116'%20x1='8'%20x2='8'%20y1='14.956'%20y2='1.026'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230078D4'/%3e%3cstop%20offset='.16'%20stop-color='%231380DA'/%3e%3cstop%20offset='.53'%20stop-color='%233C91E5'/%3e%3cstop%20offset='.82'%20stop-color='%23559CEC'/%3e%3cstop%20offset='1'%20stop-color='%235EA0EF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const figma = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%230acf83'%20d='M45.5%20129c11.9%200%2021.5-9.6%2021.5-21.5V86H45.5C33.6%2086%2024%2095.6%2024%20107.5S33.6%20129%2045.5%20129zm0%200'/%3e%3cpath%20fill='%23a259ff'%20d='M24%2064.5C24%2052.6%2033.6%2043%2045.5%2043H67v43H45.5C33.6%2086%2024%2076.4%2024%2064.5zm0%200'/%3e%3cpath%20fill='%23f24e1e'%20d='M24%2021.5C24%209.6%2033.6%200%2045.5%200H67v43H45.5C33.6%2043%2024%2033.4%2024%2021.5zm0%200'/%3e%3cpath%20fill='%23ff7262'%20d='M67%200h21.5C100.4%200%20110%209.6%20110%2021.5S100.4%2043%2088.5%2043H67zm0%200'/%3e%3cpath%20fill='%231abcfe'%20d='M110%2064.5c0%2011.9-9.6%2021.5-21.5%2021.5S67%2076.4%2067%2064.5%2076.6%2043%2088.5%2043%20110%2052.6%20110%2064.5zm0%200'/%3e%3c/svg%3e";
const postman = "/_app/immutable/assets/postman._cvE1JhI.svg";
const ai = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20viewBox='0%200%20240%20234'%3e%3cpath%20fill='%23300'%20d='M42.5%200h155C221%200%20240%2019%20240%2042.5v149c0%2023.5-19%2042.5-42.5%2042.5h-155C19%20234%200%20215%200%20191.5v-149C0%2019%2019%200%2042.5%200z'/%3e%3cpath%20fill='%23ff9a00'%20d='M116%20140H78.8l-7.6%2023.5c-.2.9-1%201.5-1.9%201.4H50.5c-1.1%200-1.4-.6-1.1-1.8l32.2-92.7c.3-1%20.6-2.1%201-3.3.4-2.1.6-4.3.6-6.5-.1-.5.3-1%20.8-1.1h25.9c.8%200%201.2.3%201.3.8l36.5%20103c.3%201.1%200%201.6-1%201.6h-20.9c-.7.1-1.4-.4-1.6-1.1L116%20140zm-31.4-20.3H110c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-.8-2.8-1.5-5.4-2.2-7.8H97c-.9%204.3-2%208.6-3.4%2012.9-1.5%204.8-3%209.8-4.6%2014.8-1.4%205.1-2.9%209.8-4.4%2014zM170%2077c-3.3.1-6.5-1.2-8.9-3.5-2.3-2.5-3.5-5.8-3.4-9.2-.1-3.4%201.2-6.6%203.6-8.9s5.6-3.5%208.9-3.5c3.9%200%206.9%201.2%209.1%203.5%202.2%202.4%203.4%205.6%203.3%208.9.1%203.4-1.1%206.7-3.5%209.2-2.3%202.4-5.7%203.7-9.1%203.5zm-11.2%2086.8v-77c0-1%20.4-1.4%201.3-1.4h19.8c.9%200%201.3.5%201.3%201.4v77c0%201.1-.4%201.6-1.3%201.6h-19.6c-1%200-1.5-.6-1.5-1.6z'/%3e%3c/svg%3e";
const css = {
  code: ".grid-container.svelte-iayk2b{display:grid;grid-template-columns:auto auto auto;max-height:600px;overflow:scroll}.grid-item.svelte-iayk2b{border-width:1px;--tw-border-opacity:1;border-color:rgb(237 242 247 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.75rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}",
  map: `{"version":3,"file":"AboutSkills.svelte","sources":["AboutSkills.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport css3 from \\"$lib/images/skills/css3.svg\\";\\nimport sass from \\"$lib/images/skills/sass.svg\\";\\nimport html5 from \\"$lib/images/skills/html5.svg\\";\\nimport javascript from \\"$lib/images/skills/js.svg\\";\\nimport typescript from \\"$lib/images/skills/ts.svg\\";\\nimport AppImage from \\"$lib/components/AppImage.svelte\\";\\nimport svelte from \\"$lib/images/svelte-logo.svg\\";\\nimport vuejs from \\"$lib/images/skills/vuejs.svg\\";\\nimport tailwind from \\"$lib/images/skills/tailwind.svg\\";\\nimport nodejs from \\"$lib/images/skills/nodejs.svg\\";\\nimport mongodb from \\"$lib/images/skills/mongodb.svg\\";\\nimport vscode from \\"$lib/images/skills/vscode.svg\\";\\nimport npm from \\"$lib/images/skills/npm.svg\\";\\nimport azure from \\"$lib/images/skills/azure.svg\\";\\nimport figma from \\"$lib/images/skills/figma.svg\\";\\nimport postman from \\"$lib/images/skills/postman.svg\\";\\nimport ai from \\"$lib/images/skills/ai.svg\\";\\nexport let skills;\\nlet searchQuery = \\"\\";\\nlet sortColumn = \\"\\";\\nlet sortDirection = \\"asc\\";\\nlet rows = skills;\\nlet filteredRows = [...rows];\\nfunction filterTable() {\\n  filteredRows = rows.filter(\\n    (row) => Object.values(row).some(\\n      (value) => value.toString().toLowerCase().includes(searchQuery.toLowerCase())\\n    )\\n  );\\n  sortTable();\\n}\\nfunction sortTable() {\\n  filteredRows = [...filteredRows];\\n  if (sortColumn) {\\n    filteredRows.sort((a, b) => {\\n      if (sortColumn === \\"level\\") {\\n        return sortDirection === \\"asc\\" ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];\\n      } else {\\n        const valueA = a[sortColumn].toString().toLowerCase();\\n        const valueB = b[sortColumn].toString().toLowerCase();\\n        if (valueA < valueB)\\n          return sortDirection === \\"asc\\" ? -1 : 1;\\n        if (valueA > valueB)\\n          return sortDirection === \\"asc\\" ? 1 : -1;\\n        return 0;\\n      }\\n    });\\n  }\\n}\\nfunction setSortColumn(column) {\\n  if (sortColumn === column) {\\n    sortDirection = sortDirection === \\"asc\\" ? \\"desc\\" : \\"asc\\";\\n  } else {\\n    sortColumn = column;\\n    sortDirection = \\"asc\\";\\n  }\\n  sortTable();\\n}\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .grid-container {\\r\\n    display: grid;\\r\\n    grid-template-columns: auto auto auto;\\r\\n    max-height: 600px;\\r\\n    overflow: scroll;\\r\\n  }\\r\\n  .grid-item {\\r\\n    border-width: 1px;\\r\\n    --tw-border-opacity: 1;\\r\\n    border-color: rgb(237 242 247 / var(--tw-border-opacity));\\r\\n    --tw-bg-opacity: 1;\\r\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\r\\n    padding: 0.75rem;\\r\\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n</style>\\r\\n\\r\\n<div class=\\"container max-w-screen-md mt-24\\">\\r\\n\\r\\n  <div class=\\"pb-6\\">\\r\\n    <h3 class=\\"text-xl font-bold pb-4\\"> 🛠️ Technologies & Skills </h3>\\r\\n    <p>\\r\\n      I possess a diverse skill set encompassing both development and design disciplines. My expertise ranges from modern frontend frameworks and tools to UI/UX design, ensuring comprehensive and effective web solutions.\\r\\n    </p>\\r\\n    <span class=\\"block pt-6 pb-3\\">Languages</span>\\r\\n    <div class=\\"flex gap-4\\">\\r\\n      <AppImage src=\\"{html5}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{css3}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{sass}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{javascript}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{typescript}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n    </div>\\r\\n\\r\\n    <span class=\\"block pt-6 pb-3\\">Frameworks / Libraries</span>\\r\\n    <div class=\\"flex gap-4\\">\\r\\n      <AppImage src=\\"{svelte}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <!-- <AppImage src=\\"{sveltekit}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" /> -->\\r\\n      <AppImage src=\\"{vuejs}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{tailwind}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{nodejs}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{mongodb}\\" class=\\"w-16 h-12\\" />\\r\\n    </div>\\r\\n\\r\\n    <span class=\\"block pt-6 pb-3\\">Tools / Platforms</span>\\r\\n    <div class=\\"flex gap-4\\">\\r\\n      <AppImage src=\\"{azure}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <!-- <AppImage src=\\"{sveltekit}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" /> -->\\r\\n      <AppImage src=\\"{vscode}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{npm}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{figma}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{postman}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n      <AppImage src=\\"{ai}\\" class=\\"w-10 h-10 md:w-12 md:h-12\\" alt=\\"skill\\" />\\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n  <span class=\\"block pt-6 pb-3\\">Search and filter all my skills / technologies / tools </span>\\r\\n  <input\\r\\n    type=\\"text\\"\\r\\n    placeholder=\\"Do you know ...\\"\\r\\n    bind:value={searchQuery}\\r\\n    on:input={filterTable}\\r\\n    class=\\"mb-4 p-2 border border-svOrange w-full md:min-w-[380px] focus:outline-svOrange\\"/>\\r\\n  <div class=\\"grid-container custom-scrollbar\\">\\r\\n    <button\\r\\n      class=\\"bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer\\"\\r\\n      on:click={() => setSortColumn('name')}\\r\\n    >\\r\\n      Skill / Technology\\r\\n    </button>\\r\\n    <button\\r\\n      class=\\"bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer\\"\\r\\n      on:click={() => setSortColumn('type')}\\r\\n    >\\r\\n      Type\\r\\n    </button>\\r\\n    <button\\r\\n      class=\\"bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer\\"\\r\\n      on:click={() => setSortColumn('level')}\\r\\n    >\\r\\n      Level (1-5)\\r\\n    </button>\\r\\n\\r\\n    {#each filteredRows as row (row.name)}\\r\\n      <div class=\\"grid-item\\">{row.name}</div>\\r\\n      <div class=\\"grid-item\\">{row.type}</div>\\r\\n      <div class=\\"grid-item\\">\\r\\n        <div class=\\"flex flex-row gap-1\\">\\r\\n          {#each Array.from({ length: row.level }) as _, index}\\r\\n            <div class=\\"bg-svOrange w-3 h-3 rounded-full\\" key={index}></div>\\r\\n          {/each}\\r\\n        </div>\\r\\n      </div>\\r\\n    {/each}\\r\\n    {#if filteredRows.length === 0}\\r\\n      <div class=\\"grid-item col-span-3 text-center py-4 text-gray-600\\">\\r\\n        Nope 🤕\\r\\n      </div>\\r\\n    {/if}\\r\\n  </div>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AA8DE,6BAAgB,CACd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CACrC,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,MACZ,CACA,wBAAW,CACT,YAAY,CAAE,GAAG,CACjB,mBAAmB,CAAE,CAAC,CACtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC,CACzD,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CACzD,OAAO,CAAE,OAAO,CAChB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC3C"}`
};
const AboutSkills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skills } = $$props;
  let searchQuery = "";
  let rows = skills;
  let filteredRows = [...rows];
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0)
    $$bindings.skills(skills);
  $$result.css.add(css);
  return `<div class="container max-w-screen-md mt-24"><div class="pb-6"><h3 class="text-xl font-bold pb-4" data-svelte-h="svelte-qgy6sj">🛠️ Technologies &amp; Skills</h3> <p data-svelte-h="svelte-tjplnz">I possess a diverse skill set encompassing both development and design disciplines. My expertise ranges from modern frontend frameworks and tools to UI/UX design, ensuring comprehensive and effective web solutions.</p> <span class="block pt-6 pb-3" data-svelte-h="svelte-1ty7gna">Languages</span> <div class="flex gap-4">${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: html5,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: css3,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: sass,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: javascript,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: typescript,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )}</div> <span class="block pt-6 pb-3" data-svelte-h="svelte-n70quc">Frameworks / Libraries</span> <div class="flex gap-4">${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: svelte,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )}  ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: vuejs,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: tailwind,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: nodejs,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render($$result, { src: mongodb, class: "w-16 h-12" }, {}, {})}</div> <span class="block pt-6 pb-3" data-svelte-h="svelte-n4lunx">Tools / Platforms</span> <div class="flex gap-4">${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: azure,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )}  ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: vscode,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: npm,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: figma,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: postman,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )} ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: ai,
      class: "w-10 h-10 md:w-12 md:h-12",
      alt: "skill"
    },
    {},
    {}
  )}</div></div> <span class="block pt-6 pb-3" data-svelte-h="svelte-156lsca">Search and filter all my skills / technologies / tools</span> <input type="text" placeholder="Do you know ..." class="mb-4 p-2 border border-svOrange w-full md:min-w-[380px] focus:outline-svOrange"${add_attribute("value", searchQuery, 0)}> <div class="grid-container custom-scrollbar svelte-iayk2b"><button class="bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer" data-svelte-h="svelte-axznu4">Skill / Technology</button> <button class="bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer" data-svelte-h="svelte-elqkxb">Type</button> <button class="bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer" data-svelte-h="svelte-1ahe7qt">Level (1-5)</button> ${each(filteredRows, (row) => {
    return `<div class="grid-item svelte-iayk2b">${escape(row.name)}</div> <div class="grid-item svelte-iayk2b">${escape(row.type)}</div> <div class="grid-item svelte-iayk2b"><div class="flex flex-row gap-1">${each(Array.from({ length: row.level }), (_, index) => {
      return `<div class="bg-svOrange w-3 h-3 rounded-full"${add_attribute("key", index, 0)}></div>`;
    })}</div> </div>`;
  })} ${filteredRows.length === 0 ? `<div class="grid-item col-span-3 text-center py-4 text-gray-600 svelte-iayk2b" data-svelte-h="svelte-932ije">Nope 🤕</div>` : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log({ data });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1wyp3zc_START -->${$$result.title = `<title>Skills</title>`, ""}<meta name="description" content="Mirta's skills, technologies and tools"><!-- HEAD_svelte-1wyp3zc_END -->`, ""} ${validate_component(AboutSkills, "AboutSkills").$$render($$result, { skills: data?.skills }, {}, {})}`;
});
export {
  Page as default
};
