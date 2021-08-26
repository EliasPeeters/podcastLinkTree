let url = '';

let data = [
    {
        name: "Apple Podcast",
        link: "https://podcasts.apple.com/de/podcast/scharf-angebraten/id1570645760",
        type: '1',
        image: url + "/assets/images/apple_podcasts.jpg"
    },
    {
        name: "Spotify",
        link: "https://open.spotify.com/show/0mo6ncfrpp516Zb1Z8jtUu",
        type: '1',
        image: url + "/assets/images/spotify.png"
    },
    {
        name: "Google Podcast",
        link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkcy5yZWRjaXJjbGUuY29tL2FjNzU2NWQ5LWJhMjAtNGM4Mi04ODUxLTkzM2NkYTNhYjVkZA%3D%3D",
        type: '1',
        image: url + "/assets/images/google.png"
    },
    {
        name: "Radio Public",
        link: "https://radiopublic.com/scharf-angebraten-6BBAbR",
        type: '1',
        image: url + "/assets/images/radio_public.jpg"
    },
    {
        name: "Castro",
        link: "https://castro.fm/podcast/0342db65-30e6-4d72-972e-04d850b4a310",
        type: '1',
        image: url + "/assets/images/castro.jpg"
    },
    {
        name: "🎧 Spotify Playlist",
        link: "https://open.spotify.com/playlist/64ICmGcJSe5FeoWM9D3i7S?si=rwOyO5ghSVuaWiewILXggQ&dl_branch=1",
        type: '2'
    },
    {
        name: "🎧 Apple Music Playlist",
        link: "https://music.apple.com/de/playlist/scharf-angebraten/pl.u-75B3hxvVj76?l=en",
        type: '2'
    },
    {
        name: "🎧 Amazon Music Playlist",
        link: "https://music.amazon.de/user-playlists/b0c0db423c0b4e44b175a01f5d910015dede?ref=dm_sh_5MZI1gEMnVaxRkhB7oAgQAMs8",
        type: '2'
    }
]

app.get('/tree', (req, res) => {
    res.render('podcastLinkTree', {data: data, url: url});
})