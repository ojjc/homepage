let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'New York',
    scale: "F",
  },
  clock: {
    format: "X - a",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.com/search/pins/?q=", "Pinterest"],
      a: ["https://www.amazon.com/s?k=", "Amazon"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "essentials",
      // background_url: "src/img/banners/cbg-2.gif",
      background_url: "src/img/banners/opening-crop.gif",
      categories: [{
        name: "media",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "aniwave",
            url: "https://aniwave.to/",
            icon: "device-tv",
            icon_color: "#e78a4e",
          },
          {
            name: "streameast",
            url: "https://the.streameast.app/v78",
            icon: "eye",
            icon_color: "#89b482",
          },
          {
            name: "tcb-scans",
            url: "https://tcbscans.me/",
            icon: "book",
            icon_color: "white",
          },
        ],
      }, {
        name: "prod",
        links: [
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "pinterest",
            url: "https://www.pinterest.com/",
            icon: "brand-pinterest",
            icon_color: "#ea6962",
          },
          {
            name: "twitter",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "insta",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "#e47cc1"
          },
        ],
      }, {
        name: "shopper",
        links: [
          {
            name: "amazon",
            url: "https://amazon.com/",
            icon: "brand-amazon",
            icon_color: "#FE9800",
          },
          {
            name: "ebay",
            url: "https://www.ebay.com/",
            icon: "briefcase",
            icon_color: "#6B9312",
          },
          {
            name: "etsy",
            url: "https://www.etsy.com/",
            icon: "brand-etsy",
            icon_color: "#F27131",
          },
        ],
      }],
    },
    {
      name: "extra",
      // background_url: "src/img/banners/dvd-crop.gif",
      background_url: "src/img/banners/flowers-2-crop.gif",
      // background_url: "src/img/banners/kiss-crop-2-dark.gif", // a-drive-2-editred.gif
      categories: [
        {
          name: "sbubby",
          links: [
            {
              name: "brightspace",
              url: "https://mycourses.stonybrook.edu/d2l/login",
              icon: "school",
              icon_color: "#ea6962",
            },
            {
              name: "solar",
              url: "https://prod.ps.stonybrook.edu/psp/csprods/?cmd=login",
              icon: "shield",
              icon_color: "#7daea3",
            },
            {
              name: "classie",
              url: "https://classie-evals.stonybrook.edu/",
              icon: "file-search",
              icon_color: "#89b482",
            },
            {
              name: "deg-works",
              url: "it.stonybrook.edu/services/degree-works",
              icon: "activity-heartbeat",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "ranking",
          links: [
            {
              name: "last.fm",
              url: "https://www.last.fm/user/ojjc",
              icon: "brand-lastfm",
              icon_color: "#ea6962",
            },
            {
              name: "rym",
              url: "https://rateyourmusic.com/",
              icon: "vinyl",
              icon_color: "#7daea3",
            },
            {
              name: "mal",
              url: "https://myanimelist.net/profile/ojja",
              icon: "alien",
              icon_color: "#89b482",
            },
            {
              name: "letterboxd",
              url: "https://myanimelist.net/profile/ojja",
              icon: "brand-letterboxd",
              // icon_color: "#FF8000",
              icon_color: "#d3869b"
            }
            // {
            //   name: "adobe color",
            //   url: "https://color.adobe.com/es/create/color-wheel",
            //   icon: "brand-adobe",
            //   icon_color: "#a9b665",
            // },
            // {
            //   name: "terminalsexy",
            //   url: "https://terminal.sexy",
            //   icon: "prompt",
            //   icon_color: "#e78a4e",
            // },
          ],
        },
        {
          name: "google",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#7daea3",
            },
            {
              name: "calendar",
              url: "https://calendar.google.com/calendar/u/0/r?pli=1",
              icon: "calendar",
              icon_color: "#89b482",
            },
          ],
        },
      ],
    },
    {
      name: "nerd",
      // background_url: "src/img/banners/cbg-7.gif",
      // background_url: "src/img/banners/dvd-crop.gif",
      // background_url: "src/img/banners/gojo-eye-2.gif",
      // background_url: "src/img/banners/a-train-3-crop.gif",
      background_url: "src/img/banners/camera-crop.gif",
      categories: [
        {
          name: "subreddits",
          links: [
            {
              name: "r/hwswap",
              url: "https://www.reddit.com/r/hardwareswap/",
              // icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "r/sffpc",
              url: "https://www.reddit.com/r/sffpc/",
              // icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "r/kpop",
              url: "https://www.reddit.com/r/kpop/",
              // icon: "brand-vscode",
              icon_color: "#7daea3",
            },
            {
              name: "r/malelivingspace",
              url: "https://www.reddit.com/r/malelivingspace/",
              // icon: "brand-vscode",
              icon_color: "#7daea3",
            },
            {
              name: "r/unixporn",
              url: "https://www.reddit.com/r/unixporn/",
              // icon: "brand-vscode",
              icon_color: "#7daea3",
            },
            {
              name: "r/animetitties",
              url: "https://www.reddit.com/r/anime_titties/",
              // icon: "biohazard",
              icon_color: "#ea6962",
            },
            
          ],
        },
        {
          name: "doom-scrolling",
          links: [
            {
              name: "neocities",
              url: "https://neocities.org/browse",
              icon: "building",
              icon_color: "#a9b665",
            },
            {
              name: "post-office",
              url: "https://afternoon.dynu.com/letterbox.html",
              icon: "mailbox",
              icon_color: "#6E4319",
            },
            {
              name: "/wg/",
              url: "https://boards.4chan.org/wg/",
              icon: "camera-selfie",
              icon_color: "#16538C",
            },
            {
              name: "/lit/",
              url: "https://boards.4chan.org/lit/",
              icon: "book-2",
              icon_color: "#e78a4e",
            },
            {
              name: "/p/",
              url: "https://boards.4chan.org/p/",
              icon: "camera",
              icon_color: "#ea6962",
            },
            {
              name: "/out/",
              url: "https://boards.4chan.org/out/",
              icon: "leaf",
              icon_color: "#8EE095",
            }
          ],
        },
        {
          name: "repo",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
      ],
    },
    {
      name: "oops !",
      // background_url: "src/img/banners/cbg-9.gif",
      // background_url: "src/img/banners/shuffle-crop.gif",
      background_url: "src/img/banners/closing-crop.gif",
      categories: [
        {
          name: "oops! 😭",
          links: [
            {
              name: "hydrahd",
              url: "https://hydrahd.com/",
              icon: "badge-hd",
              icon_color: "#A50A0A",
            },
            {
              name: "braflix",
              url: "https://www.braflix.ru/",
              icon: "movie",
              icon_color: "#ea6962",
            },
            {
              name: "flixhq",
              url: "https://flixhq.click/home",
              icon: "brand-flightradar24",
              icon_color: "#9CC436",
            },
            {
              name: "dramacool",
              url: "https://kissasian.lu/",
              icon: "massage",
              icon_color: "#33AFB0",
            },
            {
              name: "kissasian",
              url: "https://asianc.sh//",
              icon: "torii",
              icon_color: "#E2B80A",
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "wikipedia",
              url: "https://www.wikipedia.com",
              icon: "brand-wikipedia",
              icon_color: "white",
            },
            {
              name: "hacker-news",
              url: "https://news.ycombinator.com/",
              icon: "speakerphone",
              icon_color: "#CC5200",
            },
            {
              name: "r/piracy",
              url: "https://www.reddit.com/r/Piracy/wiki/megathread/movies_and_tv/#wiki_.25B6.FE0F_asianc",
              icon: "skull",
              icon_color: "#e78a4e",
            },
            {
              name: "the-onion",
              url: "https://www.theonion.com/",
              icon: "sleigh",
              icon_color: "#89b482",
            },
          ],
        },
        {
          name: "misc",
          links: [
            {
              name: "wordle",
              url: "https://www.nytimes.com/games/wordle/index.html",
              icon: "flame",
              icon_color: "#ea6962",
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#E2B714",
            },
            {
              name: "2048",
              url: "https://play2048.co/",
              icon: "device-gamepad",
              icon_color: "#89b482",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();

document.addEventListener('DOMContentLoaded', (event) => {
  const tabsList = document.querySelector('tabs-list');
  const hours = new Date().getHours();
  
  if (hours >= 18 || hours < 6) {
      // If the time is between 6 PM and 6 AM, apply the 'night' class
      tabsList.classList.add('night');
  } else {
      // Otherwise, ensure the 'night' class is removed
      tabsList.classList.remove('night');
  }
});

// Execute the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", changeBackgroundBasedOnTime);