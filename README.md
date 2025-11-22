# Vincentia Website
## Purpose
This website is designed for weekend holiday lovers seeking a fun, visually engaging platform to explore short getaways. It caters to users browsing during work or breaks, considering a relaxing weekend in Vincentia. By emphasizing Vincentia’s location on the homepage, it appeals to nearby residents in NSW and QLD. A community forum adds authenticity, allowing locals to share newsletters and updates, giving tourists a genuine sense of the place.

## Justifications for implementation decisions
- *Nav Bar*: I chose a familiar structure: “Home,” “History,” “Attractions,” and “Forum,” to reduce cognitive load and align with user expectations, this hierarchy guides users from introduction to interaction. A search bar was added based on user feedback for quick navigation. Profile and settings icons serve as placeholders for login and customization, aligning with standard web conventions.

- *Homepage*: The hero image uses beachy tones, sand, clouds, and a tree, to reflect Vincentia’s natural charm. Initially, I considered coding header elements individually for sharper rendering, but this didn't align with the layout, so I exporting the header as a flattened PNG improved responsiveness across screens without compromising visual quality. The location icon and wave-like text reinforce a youthful, holiday-oriented tone. The embedded iframe links to Google Maps in a new tab, covient for the user.

- *Homepage: Animation*: To enhance engagement, I explored subtle background animations. While my target audience liked the idea of waves washing over the screen, technical complexity to code it led me to simplify the interaction. I tested SVG-based file animations on the Sprite.svg file, but found it difficult to implement. Instead, I pivoted to SVG in javascript (AI) and html for a smoother animation.

- *History*: I made syre to have a clear heading and consistent subheading (italics). I used bold, italics, and dot points for quick readability and reduced line spacing in the colonial section based on user feedback. Since the static tree was unfavourable, when I suggested to make it animated like a shaking tree, my users were intrigued. I intially made a subtle shaking tree, but it was barely visibile, so I prompted AI to help me contruct a shaking tree with leaves falling in the same overall class for my SVGs constructed in figma, via javascript. 

- *Attractions*: I split the content into “Interesting Eateries and Attractions” and “Natural Locations” (dark blue colour to satisfy WAVE) to filter and provides a minimal layout, perfect for users browsing during a break. Both pages share the same structure, but I alternated image and text placement to guide the eye and add visual rhythm in a broken figure-eight layout (more like exploring than reading a report). 

- *Forum*: The Forum fosters community engagement while maintaining visual clarity. Initially, I used PNGs for tag buttons, but inconsistent sizing hindered responsiveness. Replacing them with styled HTML buttons improved scalability and alignment across devices. The collage layout was achieved using stacked classes and column-based lists, allowing images to adapt fluidly to screen size. Each image is linked to a post via JavaScript overlays, avoiding the need for multiple pages and streamlining navigation. Using data-post anchors, I connected tags to content dynamically, enabling lightweight interactivity.

- *Side-bar, in mobile frames*: The collapsable menu side bar has to be functional, so with the help of html and css AI chatbot, I was able to use a combine CSS, html and javascript for the user to click on the hamburger bar in smaller screens to view a side bar, in both a landscape and portrait format. I also made sure it was closable with an x button.


**Colour choices based on Colour Analysis and WAVE**
- Nav Bar: Original contrast (3.19:1) failed WCAG AA. I retained the background (#9B8E7E) but changed the foreground to #331E1E, achieving a 4.87:1 ratio and passing both normal and large text standards.
- Homepage (8.2/10), History (7.8/10), Forum (7.6/10 (I had to change the words to a dark colour and background to a more pale brown)): Google Maps text (#555555 on #FFFFFF) passed with a 7.45:1 ratio.
- Attractions (7.3/10 (I had to make the words dark)), (8.2/10 (Make the blue background lighter and text darker)), (8.2/10): Eateries: #000000 on #B9C7D6 (12.2:1); Natural Locations: #331E1E on #B39B7C (7.89:1)
These adjustments ensure legibility for all users, including those with visual impairments, and demonstrate a commitment to inclusive design.



## Comparisons between wireframes and prototype
### Homepage
- **Web**:Removed hamburger menu and search icon, which were unnecessary on desktop. Added a search bar and black font for contrast. Removed unclear tree stump illustration based on user feedback. The shape of the waves were slightly different to enable the animation.

![Homepage wireframe](/images/1.png)


- **Mobile**: In the wireframe I made the hero image smaller in the wireframe to see the whole page at one glance. However what worked better in the prototype was not specifying the image dimensions too much, so that it responded to any prototype form.

![Homepage Mobile](/images/2.png "Homepage Mobile")


### History
- **Web**: I replaced static tree with animated version. Initial hover-triggered shake was too subtle, so I added falling leaves and lateral movement for better visibility.

![History Wirefram](/images/3.png "History Wireframe")

- **Mobile**: Added a search bar for minimalistic navigation. Maintained square image proportions for easier resizing. Background animation was preserved and repositioned for clarity.

![History Mobile prototype](/images/4.png "History Mobile prototype")


## Attractions
- **Web**: The first attractions page looks very similar to my wireframe, only the nav bar changed, and the words were centered to look more symmetrical. I took out the search bar from in the page to the nav bar, for universal search bar (more minimalistic, suits target audience).

![Attractions wireframe](/images/5.png "Attractions wireframe")

![Interesting Eateries prototype](/images/6.png "Interesting Eatries prototype")

![Attractions prototype](/images/7.png "Attractions prototype")

- **Mobile**: Replaced grey and gold with beach-inspired colors. Sidebar was made opaque for consistency. Added full-screen search for familiarity with app-based interfaces.


![Attractions prototype](/images/8.png "Attractions prototype")





## Forum
-  **Web**: Moved search bar to nav, removed arrow icon, and added “Recent Posts” for clarity. Simplified comment section to show usernames and input fields distinctly

![Forum wireframe](/images/9.png "Forum wireframe")



- **Mobile**: Wireframe had separate tabs for posts and comments. In the prototype, media queries handled resizing, so one page worked for the collage. I added “Recent Posts” to clarify what the tag links were.

![Forum prototype Mobil2e](/images/10.png "Forum prototype Mobile")


# Bibliography
Bibliography
(2025). Alamy.com. https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/HMXWPF/scribbly-gum-track-part-of-the-white-sands-walk-between-hyams-and-HMXWPF.jpg
‌
anna. (2024, January 28). Vincentia Beach. Pinterest. https://au.pinterest.com/pin/1099370959029065006/

Art, L. M. (2015, April 20). Bright Kayaks Outdoors. Pinterest. https://au.pinterest.com/pin/395472411005688169/

Awm.gov.au. (2025).JERVIS BAY, NSW, 1919. CRUISERS FROM THE IMPERIAL JAPANESE NAVY STEAMING INTO JERVIS BAY ON A ... https://www.awm.gov.au/collection/C248221

‌BeachAtlas. (2025). Beachatlas.com. https://www.beachatlas.com/blenheim

31 Beach Street, VINCENTIA NSW 2540 - Jervis Bay Realty. (2025, July 3). Jervis Bay Realty. https://jervisbayrealty.com.au/property/31-beach-street-vincentia-nsw-2540/

(2025). Bing.com. https://th.bing.com/th/id/OIP.07i84HD5DxsaJcFqqdPgGgHaFj?w=249&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3
‌
(2025). Bing.com. https://th.bing.com/th/id/OIP.HLezljqVOuXIxKEjPvZWfQHaEo?w=278&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3
‌
(2025). Bing.com. https://th.bing.com/th/id/OIP.FN0c90VNSpfbbruXjRkxmQAAAA?w=277&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3
‌
(2025). Bing.com. https://th.bing.com/th/id/OIP._hp4rEXIFLqjQNIn3yVGqAHaEK?w=310&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3

(2025). Bing.com. https://th.bing.com/th/id/OIP.xK2Sz_6Zq3-PhZYJbfWFKwHaEK?w=280&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3

‌
Blocked. (2025). Jervisbayrealty.com.au. https://jervisbayrealty.com.au/wp-content/uploads/2022/05/L18397240-VINCENTIA-14.jpg

Campbelltown City Council. (2025). Indigenous heritage - Dharawal land. Www.campbelltown.nsw.gov.au. https://www.campbelltown.nsw.gov.au/About-Campbelltown/Campbelltown-Aboriginal-Art-and-Culture-Centre/Dharawal-Land

Canada, J. T. (2023, August 25). Vincentia. Pinterest. https://au.pinterest.com/pin/18436679717643519/

99designs. (2017). Web Design for Natural Rubber Flip-Flops | 99designs. 99designs. https://99designs.com/profiles/2287605/designs/950650
DunleaCentre. (2020, December 16). Dharawal Walk Opens With Smoking Ceremony & Didgeridoo Performance. Dunlea Centre. https://dunleacentre.org.au/dunlea-centre-news/dharawal-walk-opens-with-smoking-ceremony-didgeridoo-performance/

Destination NSW. (n.d.). Barfleur Beach. Visit NSW. https://www.visitnsw.com/destinations/south-coast/jervis-bay-and-shoalhaven/vincentia/attractions/barfleur-beach

Destination NSW. (n.d.). Collingwood Beach. Visit NSW. https://www.visitnsw.com/destinations/south-coast/jervis-bay-and-shoalhaven/vincentia/attractions/collingwood-beach

Destination NSW. (n.d.). Greenfield Beach. Visit NSW. https://www.visitnsw.com/destinations/south-coast/jervis-bay-and-shoalhaven/vincentia/attractions/greenfield-beach

Destination NSW. (n.d.). Hyams Beach. Visit NSW. https://www.visitnsw.com/destinations/south-coast/jervis-bay-and-shoalhaven/hyams-beach

Destination NSW. (n.d.). Orion Beach. Visit NSW. https://www.visitnsw.com/destinations/south-coast/jervis-bay-and-shoalhaven/vincentia/attractions/orion-beach

Destination NSW. (n.d.). White Sands Walk and Scribbly Gum Track. Visit NSW. https://www.visitnsw.com/destinations/south-coast/jervis-bay-and-shoalhaven/vincentia/attractions/white-sands-walk-and-scribbly-gum-track

Experience Jervis Bay. (n.d.). Moona Moona Beach. https://experiencejervisbay.com.au/things-to-do/moona-moona-beach/

Shoalhaven Tourism. (n.d.). Nelson Beach – Vincentia. Shoalhaven. https://www.shoalhaven.com/place/nelsons-beach

Facebook. (2022). Facebook.com. https://www.facebook.com/jervisbaybikehire/
‌
headsonpillows. (2024, April 11). 20+ Best Things to Do in Vincentia, Jervis Bay - The Holidays Collection. The Holidays Collection. https://holidayscollection.com.au/things-to-do-in-vincentia/
‌
https://www.southcoastwebsitedesign.com.au. (2025). HUSKISSON and VINCENTIA | South Coast History Society Inc. Southcoasthistory.org.au. https://www.southcoasthistory.org.au/history-stories-nsw-south-coast/huskisson-and-vincentia

Indigenous Literacy Day (2024, September 3). Foundationforlearningandliteracy.info. https://foundationforlearningandliteracy.info/indigenous-literacy-day-2024-september-4/

Jeanne, A. (2023, November 27). Bioluminescent algae at Jervis Bay, Australia 🌌. Pinterest. https://au.pinterest.com/pin/38984353016756999/

Kiki The Hippie Shop. (2025). Kiki the Hippie Shop. https://www.thehippieshop.com.au/
‌
Landcare NSW. (2008). Vincentia Bushcare Action Plan: Plantation Point & Stuart King Reserve. https://landcare.nsw.gov.au/groups/vincentia/action-plans/attention-size-is-9-mb-vincentia-bushcare-plantation-point-stuart-king-reserve-bushcare-action-plan-2008/

Login • Instagram. (2017). Instagram.com. https://www.instagram.com/thelocaljervisbay/
‌
Lopez, A. T. (n.d.). fullPage scroll snapping. Create full screen pages fast and simple. Alvarotrigo.com. https://alvarotrigo.com/fullPage/

Mather, K. (2024, June 12). Indigenous Heritage of NSW South Coast - South Coast Experiences. South Coast Experiences. https://www.southcoastexperiences.com.au/indigenous-heritage-of-nsw-south-coast/

Microsoft - Search. (2022). Www.bing.com. https://www.bing.com/ck/a?

(2025). Nsw.gov.au. https://www.nationalparks.nsw.gov.au/-/media/npws/images/visit-a-park/royal-national-park/royal-visitor-experiences-01.jpg?h=450&w=767&la=en&hash=9753128713B1846C64C76BD9C345619E

Parks Australia. (n.d.). Booderee National Park. https://booderee.gov.au/

Remix Icons 4.6.0: Tags Search, Vue3 Usage, Line & Solid Styles & Website Links (Community) – Figma

Sea Kayak Jervis Bay. (2025). Sea Kayak Jervis Bay. https://www.seakayakjervisbay.com/
‌
Sholhaven. (2025). Facebook.com. https://www.facebook.com/bayandbasinleisurecentre/

SouthCoastRegister. (2014, November 18). Vincentia High’s indigenous ranger graduation ceremony. Southcoastregister.com.au; South Coast Register. https://www.southcoastregister.com.au/story/2704690/vincentia-highs-indigenous-ranger-graduation-ceremony/

Studio Brave – Building brands of influence. A branding and design studio based in Melbourne. (n.d.). Studio Brave. https://studiobrave.com.au/

Super Bargain at HomeCo. Vincentia. (2022). HomeCo. https://home-co.com.au/vincentia/super-bargain

Tabone , N. (2024). New Thai Massage Opens in Vincentia [Review of New Thai Massage Opens in Vincentia]. https://jervisbayweekend.com.au/things-to-do/new-thai-massage-opens-in-vincentia/
‌
Tannous , S. (2021). The locals guide to Vincentia [Review of The locals guide to Vincentia]. Jervis Bay Weekend. https://jervisbayweekend.com.au/things-to-do/whats-on/guide-to-vincentia/

The Best Beaches in Vincentia - BeachAtlas. (2024). Beachatlas.com. https://www.beachatlas.com/vincentia-2

TripAdvisor. (n.d.). The Golfie [Review of The Golfie]. https://www.tripadvisor.com.au/Attraction_Review-g811163-d5990820-Reviews-The_Golfie-Vincentia_Jervis_Bay_Shoalhaven_New_South_Wales.html
‌
TripAdvisor. (n.d.). Things to Do in Vincentia. https://www.tripadvisor.com.au/Attractions-g811163-Activities-Vincentia_Jervis_Bay_Shoalhaven_New_South_Wales.html

(2025). Tripadvisor.com. https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ab/45/b7/crystal-geodes-at-the.jpg?w=1200&h=1200&s=1
‌
Vincentia. (2019). Mapcarta. https://mapcarta.com/26233602

Vincentia. (2025, September 21). Visitnsw.com; VisitNSW.com. https://www.visitnsw.com/destinations/south-coast/jervis-bay-and-shoalhaven/vincentia

Vincentia Shopping Village (2025). Vincentiashoppingvillage.com.au. https://www.vincentiashoppingvillage.com.au/
‌
‌Vincentia Workshops & Event Artists (2025). Book an Artist. https://bookanartist.co/workshops-vincentia

Whitley, D. (2023, January 22). Plantation Point, Vincentia: Jervis Bay bioluminescence & snorkelling. Australia Travel Questions. https://australiatravelquestions.com/attractions/plantation-point-vincentia-jervis-bay/
‌


