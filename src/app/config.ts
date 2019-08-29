
    export interface Image {
        text: string;
        size: string;
    }

    export interface Attr {
        rank: string;
    }

    export interface Streamable {
        text: string;
        fulltrack: string;
    }

    export interface Artist {
        name: string;
        mbid: string;
        url: string;
    }

    export interface Track {
        name: string;
        url: string;
        duration: string;
        attr: Attr;
        streamable: Streamable;
        artist: Artist;
    }

    export interface Tracks {
        track: Track[];
    }

    export interface Tag {
        name: string;
        url: string;
    }

    export interface Tags {
        tag: Tag[];
    }

    export interface Wiki {
        published: string;
        summary: string;
        content: string;
    }

    export interface Album {
        name: string;
        artist: string;
        mbid: string;
        url: string;
        image: Image[];
        listeners: string;
        playcount: string;
        tracks: Tracks;
        tags: Tags;
        wiki: Wiki;
    }

    export interface RootObject {
        album: Album;
    }




