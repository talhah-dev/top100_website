<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!-- This site is hosted on Netlify. Anyone can build and deploy a site
     like this one for free: https://netlify.new/?utm_campaign=loops&utm_source=ai-legible&utm_medium=owned&utm_content=comment&utm_id=df1dc718-3b0f-4d78-82ed-49ecebe12913
     Netlify hosting facts for this site: static/SSR served via Netlify Edge. -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Top 100 Attractions - Brand Mix Variant</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Overlock:wght@400;700;900&family=Raleway:ital,wght@0,400;0,600;0,700;0,800;1,500&display=swap"
        rel="stylesheet">
    <style>
        :root {
            --bg: #0A1122;
            --bg-deep: #060B16;
            --panel: #101A30;
            --panel-2: #0D1528;
            --gold: #FABF33;
            --gold-deep: #D99A00;
            --gold-soft: #FFD97A;
            --gold-rgb: 250, 191, 51;
            --cream: #F6EFDF;
            --mist: #B9C1D4;
            --red: #C31A35;
            --blue: #2145D6;
            --green: #00843D;
            --ease: cubic-bezier(0.16, 1, 0.3, 1);
            --display: 'Overlock', sans-serif;
            --body: 'Raleway', sans-serif;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0
        }

        html {
            scroll-behavior: smooth
        }

        body {
            background: var(--bg);
            color: var(--cream);
            font-family: var(--body);
            line-height: 1.6;
            overflow-x: hidden
        }

        img {
            display: block;
            max-width: 100%
        }

        a {
            color: inherit;
            text-decoration: none
        }

        /* grain overlay */

        body::after {
            content: "";
            position: fixed;
            inset: 0;
            z-index: 60;
            pointer-events: none;
            opacity: .05;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
        }

        /* ---------- reveal system: visible by default, animates only with JS ---------- */

        .rv {
            --d: 0s
        }

        .js .rv {
            opacity: 0;
            transform: translateY(34px);
            transition: opacity .9s var(--ease) var(--d), transform .9s var(--ease) var(--d)
        }

        .js .rv.in {
            opacity: 1;
            transform: none
        }

        @media (prefers-reduced-motion: reduce) {
            .js .rv {
                opacity: 1;
                transform: none;
                transition: none
            }
        }

        /* word mask reveal (hero) */

        .wline {
            overflow: hidden;
            display: block;
            padding-bottom: .16em;
            margin-bottom: -.16em
        }

        .wline span {
            display: inline-block
        }

        .js .wline span {
            transform: translateY(115%);
            transition: transform 1.05s var(--ease)
        }

        .js.loaded .wline span {
            transform: none
        }

        @media (prefers-reduced-motion: reduce) {
            .js .wline span {
                transform: none;
                transition: none
            }
        }

        /* ---------- nav ---------- */

        .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 18px 44px;
            transition: background .5s var(--ease), padding .5s var(--ease), box-shadow .5s var(--ease)
        }

        .nav.scrolled {
            background: linear-gradient(180deg, rgba(88, 22, 32, .90), rgba(52, 14, 20, .88));
            backdrop-filter: blur(14px) saturate(140%);
            padding: 10px 44px;
            box-shadow: 0 1px 0 rgba(var(--gold-rgb), .25)
        }

        .brand {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 16px
        }

        .logo {
            height: 70px;
            width: auto;
            filter: drop-shadow(0 4px 14px rgba(0, 0, 0, .5));
            transition: height .5s var(--ease)
        }

        .nav.scrolled .logo {
            height: 50px
        }

        .herologo {
            width: 270px;
            height: auto;
            margin: 0 auto 24px;
            display: block;
            filter: drop-shadow(0 14px 36px rgba(0, 0, 0, .55));
            animation: bob 7s ease-in-out infinite
        }

        @keyframes bob {

            0%,
            100% {
                transform: translateY(0)
            }

            50% {
                transform: translateY(-9px)
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .herologo {
                animation: none
            }
        }

        .brand .name {
            font-family: var(--display);
            font-weight: 900;
            font-size: 19px;
            letter-spacing: .02em;
            color: #fff;
            white-space: nowrap
        }

        .nav .links {
            display: flex;
            gap: 30px;
            align-items: center;
            font-weight: 700;
            font-size: 13.5px;
            letter-spacing: .06em;
            color: var(--mist);
            white-space: nowrap
        }

        .nav .actions {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 14px;
            justify-content: flex-end
        }

        .nav .links a {
            transition: color .3s var(--ease)
        }

        .nav .links a:hover {
            color: var(--gold)
        }

        .cta {
            background: linear-gradient(110deg, var(--gold), var(--gold-deep));
            color: #141B2E;
            font-family: var(--display);
            font-weight: 900;
            font-size: 14px;
            letter-spacing: .05em;
            padding: 11px 22px;
            border-radius: 999px;
            transition: transform .3s var(--ease), box-shadow .3s var(--ease);
            white-space: nowrap
        }

        .cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(var(--gold-rgb), .35)
        }

        .lang-pill {
            border: 1.5px solid rgba(185, 193, 212, .45);
            border-radius: 999px;
            padding: 8px 14px;
            font-size: 12px;
            font-weight: 800;
            color: var(--chrome-link);
            letter-spacing: .05em;
            cursor: pointer;
            white-space: nowrap;
            transition: border-color .3s var(--ease), color .3s var(--ease)
        }

        .lang-pill:hover {
            border-color: var(--gold);
            color: var(--gold)
        }

        .brand .bcol {
            display: flex;
            flex-direction: column;
            gap: 6px
        }

        .nav-soc {
            display: flex;
            align-items: center;
            gap: 8px
        }

        .nav-soc::after {
            content: "";
            flex: 1;
            height: 1.5px;
            margin-left: 6px;
            background: linear-gradient(90deg, rgba(var(--gold-rgb), .5), transparent)
        }

        .nav-soc a {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 1px solid rgba(var(--gold-rgb), .45);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
            transition: border-color .3s var(--ease), background .3s var(--ease), transform .3s var(--ease)
        }

        .nav-soc a svg {
            width: 12px;
            height: 12px
        }

        .nav-soc a:hover {
            border-color: var(--gold);
            background: rgba(var(--gold-rgb), .12);
            transform: translateY(-1px)
        }

        @media (max-width:1260px) {
            .brand .bcol {
                display: none
            }
        }

        .foot-soc {
            display: flex;
            gap: 10px;
            margin-top: 18px
        }

        .foot-soc a {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 1.5px solid rgba(var(--gold-rgb), .45);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
            transition: border-color .3s var(--ease), background .3s var(--ease), transform .3s var(--ease)
        }

        .foot-soc a:hover {
            border-color: var(--gold);
            background: rgba(var(--gold-rgb), .12);
            transform: translateY(-2px)
        }

        .nav-search {
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1.5px solid rgba(var(--gold-rgb), .5);
            border-radius: 999px;
            padding: 8px 16px;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: .14em;
            color: var(--gold);
            opacity: 0;
            transform: translateY(-8px);
            pointer-events: none;
            transition: opacity .5s var(--ease), transform .5s var(--ease), border-color .3s var(--ease), background .3s var(--ease)
        }

        .nav-search.show {
            opacity: 1;
            transform: none;
            pointer-events: auto
        }

        .nav-search:hover {
            border-color: var(--gold);
            background: rgba(var(--gold-rgb), .12)
        }

        /* ---------- hero ---------- */

        .hero {
            position: relative;
            min-height: 100svh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: 156px 0 110px
        }

        .hero .photo {
            position: absolute;
            inset: -5%;
            background-size: cover;
            background-position: center 65%;
            opacity: 0;
            transition: opacity 1.8s ease;
            will-change: transform, opacity
        }

        .hero .photo.active {
            opacity: 1
        }

        @keyframes kbZoomOut {
            from {
                transform: scale(1.15)
            }

            to {
                transform: scale(1.02)
            }
        }

        @keyframes kbZoomIn {
            from {
                transform: scale(1.02)
            }

            to {
                transform: scale(1.15)
            }
        }

        @keyframes kbPan {
            from {
                transform: scale(1.12) translateX(-1.4%)
            }

            to {
                transform: scale(1.12) translateX(1.4%)
            }
        }

        .hero .photo.kb1 {
            animation: kbZoomOut 24s linear infinite alternate
        }

        .hero .photo.kb2 {
            animation: kbZoomIn 24s linear infinite alternate
        }

        .hero .photo.kb3 {
            animation: kbPan 26s linear infinite alternate
        }

        @media (prefers-reduced-motion: reduce) {
            .hero .photo {
                animation: none
            }
        }

        .hero .scrim {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(6, 11, 22, .62) 0%, rgba(6, 11, 22, .28) 38%, rgba(10, 17, 34, .9) 82%, var(--bg) 100%)
        }

        .hero .glow {
            position: absolute;
            left: 50%;
            top: 18%;
            width: 920px;
            height: 560px;
            transform: translateX(-50%);
            background: radial-gradient(ellipse, rgba(var(--gold-rgb), .16), transparent 65%);
            pointer-events: none
        }

        .hundred {
            position: absolute;
            left: 50%;
            top: 46%;
            transform: translate(-50%, -50%);
            z-index: 1;
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(280px, 44vw, 620px);
            line-height: 1;
            color: transparent;
            -webkit-text-stroke: 2.5px rgba(var(--gold-rgb), .45);
            pointer-events: none;
            user-select: none;
            filter: drop-shadow(0 0 30px rgba(var(--gold-rgb), .25))
        }

        .spark {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--gold);
            opacity: 0;
            animation: twinkle 6s ease-in-out infinite
        }

        @keyframes twinkle {

            0%,
            100% {
                opacity: 0;
                transform: scale(.6)
            }

            50% {
                opacity: .85;
                transform: scale(1)
            }
        }

        .hero .inner {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 0 24px;
            max-width: 1100px
        }

        .nav::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2.5px;
            pointer-events: none;
            background: linear-gradient(90deg, rgba(0, 132, 61, .5), rgba(33, 69, 214, .45) 34%, rgba(195, 26, 53, .45) 66%, rgba(var(--gold-rgb), .55));
        }

        .eyebrow {
            font-size: 12.5px;
            letter-spacing: .34em;
            font-weight: 800;
            color: var(--gold);
            text-transform: uppercase
        }

        .hero h1 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(48px, 7vw, 104px);
            line-height: 1.02;
            margin: 16px 0 14px;
            color: #fff;
            text-shadow: 0 4px 30px rgba(0, 0, 0, .5)
        }

        .grad {
            background: linear-gradient(110deg, var(--gold-soft) 10%, var(--gold) 45%, var(--gold-deep) 90%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        .hero .sub {
            font-style: italic;
            font-weight: 500;
            font-size: clamp(15.5px, 1.3vw, 19px);
            color: var(--mist);
            margin-top: 22px
        }

        @media (min-width:981px) {
            .hero .sub {
                white-space: nowrap
            }
        }

        .search {
            margin: 32px auto 0;
            display: flex;
            align-items: center;
            width: min(1040px, 94%);
            background: rgba(16, 26, 48, .55);
            backdrop-filter: blur(14px) saturate(150%);
            border: 1px solid rgba(var(--gold-rgb), .35);
            border-radius: 999px;
            padding: 7px 7px 7px 28px;
            box-shadow: 0 18px 50px rgba(0, 0, 0, .45)
        }

        .search .q {
            flex: 1.15;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--mist);
            font-size: 14px;
            white-space: nowrap;
            text-align: left;
            border-right: 1px solid rgba(185, 193, 212, .18);
            padding-right: 16px
        }

        .search .q2 {
            flex: 1;
            padding-left: 18px;
            position: relative;
            padding-right: 34px
        }

        .search .chev {
            font-style: normal;
            color: var(--gold);
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%)
        }

        .search .seg {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 0 12px
        }

        .segbtn {
            display: flex;
            align-items: center;
            gap: 7px;
            color: var(--mist);
            font-size: 13px;
            font-weight: 700;
            padding: 9px 15px;
            border-radius: 999px;
            border: 1px solid transparent;
            cursor: pointer;
            white-space: nowrap;
            transition: all .3s var(--ease)
        }

        .segbtn.on {
            background: rgba(var(--gold-rgb), .14);
            color: var(--gold);
            border-color: rgba(var(--gold-rgb), .4)
        }

        .segbtn:hover {
            color: var(--gold)
        }

        .search .go {
            background: linear-gradient(110deg, var(--gold), var(--gold-deep));
            color: #141B2E;
            font-family: var(--display);
            font-weight: 900;
            font-size: 15px;
            letter-spacing: .04em;
            padding: 13px 30px;
            border-radius: 999px;
            cursor: pointer;
            transition: transform .3s var(--ease), box-shadow .3s var(--ease)
        }

        .search .go:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 26px rgba(var(--gold-rgb), .4)
        }

        .search .seg,
        .search .go {
            flex-shrink: 0
        }

        .scrollcue {
            position: absolute;
            bottom: 34px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            color: var(--gold);
            font-size: 11px;
            letter-spacing: .3em;
            font-weight: 700;
            text-transform: uppercase;
            opacity: .85
        }

        .scrollcue::after {
            content: "";
            display: block;
            width: 1.5px;
            height: 44px;
            background: linear-gradient(180deg, var(--gold), transparent);
            margin: 10px auto 0;
            animation: drip 2.2s var(--ease) infinite
        }

        @keyframes drip {
            0% {
                transform: scaleY(0);
                transform-origin: top
            }

            55% {
                transform: scaleY(1);
                transform-origin: top
            }

            56% {
                transform-origin: bottom
            }

            100% {
                transform: scaleY(0);
                transform-origin: bottom
            }
        }

        @media (max-height: 900px) {
            .scrollcue {
                display: none
            }
        }

        /* ---------- marquee ---------- */

        .marquee {
            position: relative;
            padding: 26px 0;
            border-top: 1.5px solid;
            border-bottom: 1.5px solid;
            border-image: linear-gradient(90deg, rgba(53, 179, 107, .65), rgba(110, 139, 255, .6) 34%, rgba(240, 96, 122, .6) 66%, rgba(var(--gold-rgb), .65)) 1;
            overflow: hidden;
            background: var(--bg-deep)
        }

        .marquee .track {
            display: flex;
            gap: 0;
            width: max-content;
            animation: marq 46s linear infinite
        }

        .marquee:hover .track {
            animation-play-state: paused
        }

        @keyframes marq {
            from {
                transform: translateX(0)
            }

            to {
                transform: translateX(-50%)
            }
        }

        .marquee .item {
            font-family: var(--display);
            font-weight: 900;
            font-size: 22px;
            letter-spacing: .04em;
            color: rgba(246, 239, 223, .8);
            padding: 0 26px;
            white-space: nowrap
        }

        .marquee .item i {
            font-style: normal;
            color: var(--gold);
            padding-right: 52px
        }

        .marquee .fade {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 140px;
            z-index: 2;
            pointer-events: none
        }

        .marquee .fade.l {
            left: 0;
            background: linear-gradient(90deg, var(--bg-deep), transparent)
        }

        .marquee .fade.r {
            right: 0;
            background: linear-gradient(270deg, var(--bg-deep), transparent)
        }

        /* ---------- shared section chrome ---------- */

        .section {
            position: relative;
            padding: 110px 44px
        }

        .wrap {
            max-width: 1240px;
            margin: 0 auto
        }

        .kicker {
            display: flex;
            align-items: center;
            gap: 18px;
            margin-bottom: 16px
        }

        .kicker .line {
            height: 1.5px;
            width: 64px;
            background: linear-gradient(90deg, var(--gold), transparent)
        }

        .h2 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(34px, 3.6vw, 54px);
            color: #fff;
            line-height: 1.08
        }

        /* ---------- featured entries ---------- */

        .entry {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 70px;
            align-items: center;
            margin-top: 90px
        }

        .entry.flip .media {
            order: 2
        }

        .entry .media {
            position: relative
        }

        .entry .frame {
            position: relative;
            border-radius: 26px;
            overflow: hidden;
            box-shadow: 0 30px 80px rgba(0, 0, 0, .55);
            border: 1px solid rgba(var(--gold-rgb), .2)
        }

        .entry .frame .ph {
            height: 440px;
            overflow: hidden
        }

        .entry .frame .ph img {
            width: 100%;
            height: 125%;
            object-fit: cover;
            margin-top: -12.5%;
            will-change: transform
        }

        .entry .chip {
            display: inline-block;
            background: rgba(var(--gold-rgb), .12);
            border: 1px solid rgba(var(--gold-rgb), .4);
            color: var(--gold);
            font-size: 11.5px;
            font-weight: 800;
            letter-spacing: .22em;
            text-transform: uppercase;
            border-radius: 999px;
            padding: 7px 16px;
            margin-bottom: 20px
        }

        .entry .chip b {
            font-weight: 800
        }

        .entry h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(30px, 3vw, 46px);
            color: #fff;
            margin-bottom: 6px
        }

        .entry .where {
            color: var(--mist);
            font-weight: 600;
            font-size: 14.5px;
            letter-spacing: .06em;
            margin-bottom: 22px
        }

        .entry blockquote {
            font-style: italic;
            font-weight: 500;
            font-size: 19px;
            color: var(--cream);
            border-left: 2.5px solid var(--gold);
            padding-left: 22px;
            margin-bottom: 26px;
            line-height: 1.75
        }

        .entry .who {
            display: block;
            font-style: normal;
            font-size: 13px;
            color: var(--gold);
            font-weight: 700;
            letter-spacing: .14em;
            margin-top: 12px
        }

        .more {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--gold);
            font-weight: 800;
            font-size: 14px;
            letter-spacing: .1em
        }

        .more span {
            transition: transform .3s var(--ease)
        }

        .more:hover span {
            transform: translateX(6px)
        }

        /* ---------- nations ---------- */

        .nations {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
            margin-top: 64px
        }

        .nation {
            position: relative;
            height: 460px;
            border-radius: 24px;
            overflow: hidden;
            cursor: pointer;
            transition: transform .5s var(--ease), box-shadow .5s var(--ease)
        }

        .nation img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.1s var(--ease)
        }

        .nation .wash {
            position: absolute;
            inset: 0;
            opacity: .82;
            transition: opacity .5s var(--ease)
        }

        .nation.england .wash {
            background: linear-gradient(200deg, rgba(0, 53, 107, .52) 0%, rgba(0, 53, 107, .95) 88%)
        }

        .nation.scotland .wash {
            background: linear-gradient(200deg, rgba(0, 127, 255, .26) 0%, rgba(0, 127, 255, .86) 88%)
        }

        .nation.wales .wash {
            background: linear-gradient(200deg, rgba(195, 26, 53, .28) 0%, rgba(195, 26, 53, .88) 88%)
        }

        .nation.ireland .wash {
            background: linear-gradient(200deg, rgba(0, 132, 61, .28) 0%, rgba(0, 132, 61, .9) 88%)
        }

        .nation.nireland .wash {
            background: linear-gradient(200deg, rgba(108, 43, 217, .28) 0%, rgba(96, 38, 190, .9) 88%)
        }

        .nation .label {
            position: absolute;
            left: 26px;
            bottom: 24px;
            z-index: 2
        }

        .nation .label b {
            display: block;
            font-family: var(--display);
            font-weight: 900;
            font-size: 30px;
            color: #fff;
            text-shadow: 0 3px 14px rgba(0, 0, 0, .4)
        }

        .nation .label i {
            display: block;
            font-style: normal;
            font-size: 12.5px;
            font-weight: 700;
            letter-spacing: .16em;
            color: rgba(255, 255, 255, .92);
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height .5s var(--ease), opacity .5s var(--ease), margin .5s var(--ease)
        }

        .nation:hover {
            transform: translateY(-10px)
        }

        .nation.england:hover {
            box-shadow: 0 26px 60px rgba(0, 53, 107, .65)
        }

        .nation.scotland:hover {
            box-shadow: 0 26px 60px rgba(0, 127, 255, .45)
        }

        .nation.wales:hover {
            box-shadow: 0 26px 60px rgba(195, 26, 53, .4)
        }

        .nation.ireland:hover {
            box-shadow: 0 26px 60px rgba(0, 132, 61, .4)
        }

        .nation.nireland:hover {
            box-shadow: 0 26px 60px rgba(108, 43, 217, .4)
        }

        .nation:hover img {
            transform: scale(1.07)
        }

        .nation:hover .label i {
            max-height: 24px;
            opacity: 1;
            margin-top: 6px
        }

        /* ---------- stats ---------- */

        .stats {
            border: 1.5px solid transparent;
            border-radius: 28px;
            background: linear-gradient(150deg, var(--panel), var(--panel-2)) padding-box, linear-gradient(100deg, rgba(53, 179, 107, .45), rgba(110, 139, 255, .45) 35%, rgba(240, 96, 122, .45) 65%, rgba(var(--gold-rgb), .5)) border-box;
            padding: 70px 50px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            text-align: center;
            position: relative;
            overflow: hidden
        }

        .stats::before {
            content: "";
            position: absolute;
            left: 50%;
            top: -40%;
            width: 700px;
            height: 400px;
            transform: translateX(-50%);
            background: radial-gradient(ellipse, rgba(var(--gold-rgb), .12), transparent 65%)
        }

        .stat b {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(46px, 4.6vw, 72px);
            line-height: 1;
            background: linear-gradient(110deg, var(--gold-soft), var(--gold-deep));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        .stat span {
            display: block;
            margin-top: 12px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: .22em;
            text-transform: uppercase;
            color: var(--mist)
        }

        /* ---------- book & app ---------- */

        .duo {
            display: grid;
            grid-template-columns: 1.1fr .9fr;
            gap: 22px;
            margin-top: 64px
        }

        .panelcard {
            border-radius: 26px;
            padding: 54px 48px;
            position: relative;
            overflow: hidden;
            min-height: 340px;
            display: flex;
            flex-direction: column;
            justify-content: center
        }

        .panelcard.bookp {
            background: linear-gradient(130deg, var(--gold) 0%, var(--gold-deep) 100%);
            color: #141B2E
        }

        .panelcard.bookp h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(28px, 2.8vw, 42px);
            line-height: 1.1;
            margin-bottom: 12px
        }

        .panelcard.bookp p {
            font-weight: 600;
            max-width: 420px;
            margin-bottom: 26px
        }

        .panelcard.bookp .btn {
            align-self: flex-start;
            background: #141B2E;
            color: var(--gold);
            font-family: var(--display);
            font-weight: 900;
            letter-spacing: .05em;
            padding: 14px 28px;
            border-radius: 999px;
            transition: transform .3s var(--ease), box-shadow .3s var(--ease)
        }

        .panelcard.bookp .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 26px rgba(20, 27, 46, .4)
        }

        .book {
            position: absolute;
            right: 46px;
            top: 50%;
            transform: translateY(-50%) rotate(7deg);
            width: 150px;
            height: 210px;
            border-radius: 6px 12px 12px 6px;
            background: linear-gradient(150deg, #1F2A44, #0D1528);
            box-shadow: -16px 22px 40px rgba(20, 27, 46, .45);
            padding: 20px 16px;
            border-left: 8px solid #0A1122;
            transition: transform .5s var(--ease)
        }

        .panelcard.bookp:hover .book {
            transform: translateY(-50%) rotate(3deg) scale(1.04)
        }

        .book b {
            font-family: var(--display);
            font-weight: 900;
            color: #fff;
            font-size: 17px;
            line-height: 1.15;
            display: block
        }

        .book b i {
            font-style: normal;
            color: var(--gold)
        }

        .book span {
            display: block;
            margin-top: 8px;
            font-size: 9px;
            letter-spacing: .18em;
            color: var(--mist);
            font-weight: 700
        }

        .panelcard.appp {
            border: 1.5px solid transparent;
            background: linear-gradient(var(--panel), var(--panel)) padding-box, linear-gradient(100deg, rgba(53, 179, 107, .45), rgba(110, 139, 255, .45) 35%, rgba(240, 96, 122, .45) 65%, rgba(var(--gold-rgb), .5)) border-box
        }

        .panelcard.appp h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(26px, 2.4vw, 36px);
            color: #fff;
            margin-bottom: 12px
        }

        .panelcard.appp p {
            color: var(--mist);
            margin-bottom: 24px;
            max-width: 340px
        }

        .storebtns {
            display: flex;
            gap: 12px
        }

        .storebtns span {
            border: 1.5px solid rgba(var(--gold-rgb), .5);
            color: var(--gold);
            font-weight: 800;
            font-size: 12.5px;
            letter-spacing: .06em;
            padding: 11px 18px;
            border-radius: 12px;
            transition: background .3s var(--ease), transform .3s var(--ease);
            cursor: pointer
        }

        .storebtns span:hover {
            background: rgba(var(--gold-rgb), .12);
            transform: translateY(-2px)
        }

        .appdots {
            position: absolute;
            right: -30px;
            bottom: -30px;
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 132, 61, .35), transparent 65%)
        }

        /* ---------- partner + featured video cards ---------- */

        .imgcard {
            position: relative;
            border-radius: 26px;
            overflow: hidden;
            display: block;
            min-height: 300px;
            cursor: pointer;
            border: 1.5px solid transparent;
            background: linear-gradient(var(--panel), var(--panel)) padding-box, linear-gradient(100deg, rgba(53, 179, 107, .45), rgba(110, 139, 255, .45) 35%, rgba(240, 96, 122, .45) 65%, rgba(var(--gold-rgb), .5)) border-box;
            box-shadow: 0 24px 60px rgba(0, 0, 0, .4)
        }

        .imgcard img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s var(--ease)
        }

        .imgcard:hover img {
            transform: scale(1.05)
        }

        .imgcard .veil {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(6, 11, 22, .15) 0%, rgba(6, 11, 22, .8) 100%)
        }

        .imgcard .meta {
            position: absolute;
            left: 30px;
            right: 30px;
            bottom: 24px
        }

        .imgcard .meta h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(22px, 2.2vw, 32px);
            color: #fff;
            margin-top: 10px
        }

        .vchip {
            display: inline-block;
            background: rgba(var(--gold-rgb), .14);
            border: 1px solid rgba(var(--gold-rgb), .45);
            color: var(--gold);
            font-size: 10.5px;
            font-weight: 800;
            letter-spacing: .22em;
            text-transform: uppercase;
            border-radius: 999px;
            padding: 6px 14px
        }

        .imgcard .play {
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: linear-gradient(110deg, var(--gold), var(--gold-deep));
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 14px 40px rgba(0, 0, 0, .5);
            transition: transform .35s var(--ease), box-shadow .35s var(--ease)
        }

        .imgcard:hover .play {
            transform: translate(-50%, -50%) scale(1.12);
            box-shadow: 0 18px 50px rgba(var(--gold-rgb), .35)
        }

        .imgcard .play::after {
            content: "";
            margin-left: 5px;
            border-style: solid;
            border-width: 11px 0 11px 18px;
            border-color: transparent transparent transparent #141B2E
        }

        /* ---------- footer ---------- */

        .footer {
            background: var(--bg-deep);
            margin-top: 110px
        }

        .footer::before {
            content: "";
            display: block;
            height: 3px;
            background: linear-gradient(90deg, #00843D, #2145D6 34%, #C31A35 66%, #FABF33)
        }

        .brandbar {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 18px
        }

        .brandbar span {
            width: 12px;
            height: 12px;
            border-radius: 4px
        }

        .brandbar em {
            font-style: normal;
            font-size: 11.5px;
            letter-spacing: .14em;
            color: var(--mist);
            margin-left: 8px;
            text-transform: uppercase;
            font-weight: 700;
            white-space: nowrap
        }

        .footer .inner {
            max-width: 1380px;
            margin: 0 auto;
            padding: 64px 44px 46px;
            display: grid;
            grid-template-columns: 3.2fr 1fr 1fr 1fr;
            gap: 44px
        }

        .footer .brandline {
            font-family: var(--display);
            font-weight: 900;
            font-size: 22px;
            color: #fff;
            white-space: nowrap
        }

        .fbrand {
            position: relative;
            padding-left: 196px
        }

        .flogo {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: auto;
            object-fit: contain;
            object-position: left top;
            filter: drop-shadow(0 4px 14px rgba(0, 0, 0, .5))
        }

        @media (max-width:640px) {
            .fbrand {
                padding-left: 116px
            }

            .flogo {
                height: 96px
            }

            .brandbar {
                flex-wrap: wrap
            }

            .brandbar em {
                white-space: normal;
                letter-spacing: .1em
            }
        }

        .footer p,
        .footer li {
            color: var(--mist);
            font-size: 14px;
            list-style: none;
            margin-bottom: 8px
        }

        .footer h4 {
            color: var(--gold);
            font-size: 12px;
            letter-spacing: .22em;
            text-transform: uppercase;
            margin-bottom: 14px
        }

        .footer .lang {
            display: inline-block;
            border: 1.5px solid rgba(185, 193, 212, .4);
            border-radius: 10px;
            padding: 8px 16px;
            color: #fff;
            font-size: 13px;
            margin-top: 14px
        }

        .footer .base {
            border-top: 1px solid rgba(185, 193, 212, .15);
            padding: 20px 44px;
            text-align: center;
            color: var(--mist);
            font-size: 12.5px
        }

        /* ---------- opening title moment ---------- */

        #intro {
            position: fixed;
            inset: 0;
            z-index: 80;
            background: radial-gradient(ellipse at 50% 40%, #101A30, #060B16 72%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: opacity .8s var(--ease), visibility .8s
        }

        #intro.done {
            opacity: 0;
            visibility: hidden;
            pointer-events: none
        }

        #intro .lbl {
            font-family: var(--display);
            font-weight: 900;
            font-size: 20px;
            letter-spacing: .14em;
            color: #fff
        }

        #intro .n {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(130px, 24vw, 300px);
            line-height: 1;
            background: linear-gradient(110deg, var(--gold-soft), var(--gold-deep));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        #intro .sub {
            font-size: 12px;
            letter-spacing: .4em;
            color: var(--gold);
            font-weight: 800;
            text-transform: uppercase
        }

        .interlude {
            position: relative;
            margin: 110px -44px 20px;
            height: 360px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center
        }

        .interlude img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 122%;
            top: -11%;
            object-fit: cover;
            will-change: transform
        }

        .interlude .veil {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, var(--bg) 0%, rgba(10, 17, 34, .5) 30%, rgba(10, 17, 34, .55) 70%, var(--bg) 100%)
        }

        .interlude .txt {
            position: relative;
            z-index: 2;
            text-align: center
        }

        .interlude .txt b {
            display: block;
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(42px, 5.2vw, 76px);
            line-height: 1.05;
            color: transparent;
            -webkit-text-stroke: 2px var(--gold)
        }

        .interlude .txt span {
            display: block;
            margin-top: 10px;
            color: var(--cream);
            font-style: italic;
            font-size: 17.5px
        }

        /* ---------- nation expand teasers ---------- */

        .nation {
            transition: transform .5s var(--ease), box-shadow .5s var(--ease), height .6s var(--ease)
        }

        .nation.open {
            height: 660px;
            transform: none
        }

        .nation .teaser {
            position: absolute;
            left: 22px;
            right: 22px;
            bottom: 86px;
            z-index: 2;
            opacity: 0;
            transform: translateY(16px);
            transition: opacity .45s var(--ease), transform .45s var(--ease);
            pointer-events: none
        }

        .nation.open .teaser {
            opacity: 1;
            transform: none;
            pointer-events: auto;
            transition-delay: .22s
        }

        .teaser .t-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            background: rgba(6, 11, 22, .58);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, .24);
            border-radius: 12px;
            padding: 10px 14px;
            margin-bottom: 8px;
            color: #fff;
            font-weight: 700;
            font-size: 13.5px
        }

        .teaser .t-item i {
            font-style: normal;
            color: var(--gold);
            font-family: var(--display);
            font-weight: 900;
            font-size: 13px;
            white-space: nowrap
        }

        .teaser .t-all {
            display: inline-block;
            margin-top: 8px;
            color: #fff;
            font-weight: 800;
            font-size: 12px;
            letter-spacing: .16em
        }

        /* ---------- from the books wall ---------- */

        .wall {
            margin-top: 64px;
            position: relative;
            overflow: hidden
        }

        .wall .row {
            display: flex;
            overflow: hidden;
            padding: 7px 0
        }

        .wall .track2 {
            display: flex;
            gap: 18px;
            width: max-content;
            animation: marq 70s linear infinite
        }

        .wall .row.rev .track2 {
            animation-direction: reverse
        }

        .wall .row:hover .track2 {
            animation-play-state: paused
        }

        .qcard {
            width: 340px;
            background: var(--panel);
            border: 1px solid rgba(var(--gold-rgb), .22);
            border-radius: 16px;
            padding: 20px 22px;
            flex-shrink: 0
        }

        .qcard .stars {
            color: var(--gold);
            letter-spacing: .22em;
            font-size: 13px;
            margin-bottom: 8px
        }

        .qcard p {
            font-style: italic;
            font-size: 14.5px;
            color: var(--cream);
            line-height: 1.65
        }

        .qcard span {
            display: block;
            margin-top: 12px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: .18em;
            color: var(--mist);
            text-transform: uppercase
        }

        .wall .fade {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 130px;
            z-index: 2;
            pointer-events: none
        }

        .wall .fade.l {
            left: 0;
            background: linear-gradient(90deg, var(--bg), transparent)
        }

        .wall .fade.r {
            right: 0;
            background: linear-gradient(270deg, var(--bg), transparent)
        }

        /* ---------- burger + mobile menu ---------- */

        .burger {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: 0;
            cursor: pointer;
            padding: 8px
        }

        .burger span {
            width: 26px;
            height: 3px;
            border-radius: 2px;
            background: var(--gold)
        }

        #mnav {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: min(320px, 84vw);
            z-index: 82;
            background: rgba(7, 12, 24, .97);
            backdrop-filter: blur(16px);
            padding: 92px 34px;
            display: flex;
            flex-direction: column;
            gap: 22px;
            transform: translateX(105%);
            transition: transform .5s var(--ease);
            font-family: var(--display);
            font-weight: 900;
            font-size: 22px;
            border-left: 1px solid rgba(var(--gold-rgb), .3)
        }

        #mnav.open {
            transform: none
        }

        #mnav a {
            color: #fff
        }

        #mnav .close {
            position: absolute;
            top: 22px;
            right: 22px;
            font-size: 30px;
            color: var(--gold);
            background: none;
            border: 0;
            cursor: pointer;
            line-height: 1
        }

        @media (max-width: 980px) {
            .nav {
                padding: 14px 20px
            }

            .nav .links,
            .nav .actions {
                display: none
            }

            .nav .burger {
                display: flex
            }

            .section {
                padding: 80px 20px
            }

            .entry {
                grid-template-columns: 1fr;
                gap: 60px
            }

            .entry.flip .media {
                order: 0
            }

            .entry .frame .ph {
                height: 320px
            }

            .nations {
                grid-template-columns: repeat(2, 1fr)
            }

            .nations .nation:last-child {
                grid-column: 1/-1
            }

            .stats {
                grid-template-columns: repeat(2, 1fr);
                padding: 50px 30px
            }

            .duo {
                grid-template-columns: 1fr
            }

            .book {
                display: none
            }

            .footer .inner {
                grid-template-columns: 1fr 1fr
            }

            .herologo {
                width: 194px
            }

            .hundred {
                font-size: 250px
            }

            .interlude {
                margin: 80px -20px 10px;
                height: 300px
            }

            .marquee .item {
                font-size: 17px
            }

            .hero {
                padding: 128px 0 80px
            }
        }

        @media (max-width: 640px) {
            .search {
                flex-direction: column;
                gap: 10px;
                border-radius: 24px;
                padding: 14px;
                align-items: stretch
            }

            .search .q {
                border-right: none;
                padding: 4px 8px
            }

            .search .go {
                text-align: center
            }

            .nations {
                grid-template-columns: 1fr
            }

            .nation {
                height: 380px
            }

            .nation.open {
                height: 600px
            }

            .stats {
                grid-template-columns: 1fr;
                gap: 30px
            }

            .qcard {
                width: 272px
            }

            .footer .inner {
                grid-template-columns: 1fr
            }
        }

        /* ---------- colour-variant switcher (review tool, not part of the design) ---------- */

        .vswitch {
            position: fixed;
            right: 20px;
            bottom: 20px;
            z-index: 70;
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(7, 12, 24, .86);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(185, 193, 212, .22);
            border-radius: 999px;
            padding: 9px 14px;
            box-shadow: 0 14px 40px rgba(0, 0, 0, .5)
        }

        .vswitch b {
            font-family: var(--body);
            font-size: 10.5px;
            font-weight: 800;
            letter-spacing: .2em;
            color: var(--mist)
        }

        .vswitch a {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: block;
            position: relative;
            box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, .22);
            transition: transform .3s var(--ease)
        }

        .vswitch a:hover {
            transform: scale(1.16)
        }

        .vswitch a.on {
            box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, .9), 0 0 0 3px rgba(255, 255, 255, .16)
        }

        @media (max-width:640px) {
            .vswitch {
                right: 12px;
                bottom: 12px;
                padding: 7px 11px;
                gap: 8px
            }

            .vswitch a {
                width: 17px;
                height: 17px
            }
        }

        /* ---------- brand-mix variant ---------- */

        /* headlines and buttons carry all four badge colours */

        .grad {
            background: linear-gradient(110deg, #6E8BFF, #35B36B 34%, #FABF33 66%, #F0607A);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        .cta,
        .search .go {
            background: linear-gradient(110deg, #6E8BFF, #35B36B 34%, #FABF33 66%, #F0607A);
            color: #141B2E
        }

        .kicker .eyebrow {
            background: linear-gradient(110deg, #6E8BFF, #35B36B 34%, #FABF33 66%, #F0607A);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        .kicker .line {
            background: linear-gradient(90deg, #6E8BFF, #35B36B 55%, transparent)
        }

        /* the four figures take one badge colour each, so the row reads as a set */

        .stat b {
            background: none;
            -webkit-background-clip: border-box;
            background-clip: border-box;
            color: #FABF33
        }

        .stats .stat:nth-child(1) b {
            color: #6E8BFF
        }

        .stats .stat:nth-child(2) b {
            color: #35B36B
        }

        .stats .stat:nth-child(3) b {
            color: #FABF33
        }

        .stats .stat:nth-child(4) b {
            color: #F0607A
        }

        /* the two long editorial sections take one badge colour each for their chrome */

        #featured {
            --gold: #F0607A;
            --gold-deep: #E85275;
            --gold-soft: #FFA8BC;
            --gold-rgb: 240, 96, 122
        }

        #regions {
            --gold: #6E8BFF;
            --gold-deep: #6480F5;
            --gold-soft: #B8C6FF;
            --gold-rgb: 110, 139, 255
        }

        /* ---------- accent type over photography uses the light tint of the ramp ---------- */

        .hero .eyebrow {
            color: var(--gold-soft);
            text-shadow: 0 1px 3px rgba(6, 11, 22, .95), 0 2px 18px rgba(6, 11, 22, .92)
        }

        .scrollcue {
            color: var(--gold-soft);
            text-shadow: 0 2px 10px rgba(6, 11, 22, .85)
        }

        .interlude .txt b {
            -webkit-text-stroke-color: var(--gold-soft)
        }

        .vchip {
            background: rgba(6, 11, 22, .7);
            border-color: rgba(var(--gold-rgb), .55);
            color: var(--gold-soft)
        }

        .teaser .t-item i {
            color: var(--gold-soft)
        }

        .segbtn.on {
            background: rgba(6, 11, 22, .5);
            color: var(--gold-soft);
            border-color: rgba(var(--gold-rgb), .55)
        }

        /* ---------- logo colours: one language across all three pages ---------- */

        /* Display type and eyebrows carry the full badge mix. */

        .grad {
            background: linear-gradient(110deg, #6E8BFF, #35B36B 34%, #FABF33 66%, #F0607A);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        .eyebrow,
        .kicker .eyebrow {
            background: linear-gradient(110deg, #6E8BFF, #35B36B 34%, #FABF33 66%, #F0607A);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        .kicker .line {
            background: linear-gradient(90deg, #6E8BFF, #35B36B 55%, transparent)
        }

        /* Every filled call to action carries it, on all three pages: GET THE APP,
   SEARCH, GET DIRECTIONS and the loaded state of Load more.

   BUY THE BOOK is the one exception and keeps its navy pill. Every other CTA
   sits on the dark canvas, where the mix reads as four colours; this one sits
   on the full-bleed gold panel, and a gradient running gold to pink over gold
   loses its two warm stops into the background and goes muddy at the ends. The
   navy pill with gold type is also the strongest contrast on that panel, which
   is what the loudest button on the page should have. */

        .cta,
        .search .go,
        .vinfo .dirs,
        .loadmore:hover {
            background: linear-gradient(110deg, #6E8BFF, #35B36B 34%, #FABF33 66%, #F0607A);
            color: #141B2E
        }

        /* The four figures run the mix across each numeral rather than taking one
   badge colour each. Specificity has to match the per-figure rules already in
   the homepage variant, hence :nth-child(n) rather than a bare .stat b. */

        .stats .stat:nth-child(n) b {
            background: linear-gradient(110deg, #6E8BFF, #35B36B 34%, #FABF33 66%, #F0607A);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        /* Pills, chips, filters and the small outlined controls stay GOLD. They are the
   most repeated elements on the listing, and at 10px gold is both the loudest
   thing on this canvas and the only accent that holds its shape; the mix turns
   to mud at that size.

   Pinned explicitly rather than just left on the base ramp: the homepage scopes
   #featured and #regions to a badge colour each, so a pill sitting inside one
   of them would inherit that colour instead. This is what was turning the
   Featured Attraction / Place to Eat / Place to Stay pills pink. */

        .rchip,
        .gcard .gchip,
        .entry .chip,
        .vchip,
        .fchip,
        .rtag,
        .fchip.on,
        .fchip:hover,
        .segbtn.on,
        .segbtn:hover,
        .storebtns span,
        .loadmore,
        .nav-search {
            --gold: #FABF33;
            --gold-deep: #D99A00;
            --gold-soft: #FFD97A;
            --gold-rgb: 250, 191, 51
        }

        /* The contact column runs red instead, to sit with the red the review byline
   and its link already carry. */

        .vinfo {
            --gold: #F0607A;
            --gold-deep: #E85275;
            --gold-soft: #FFA8BC;
            --gold-rgb: 240, 96, 122
        }

        .fact .flabel {
            background: none;
            -webkit-background-clip: border-box;
            background-clip: border-box;
            color: var(--gold)
        }

        /* The three Before-you-go numerals run the badge in order. */

        .whys .why:nth-child(1) {
            --gold: #6E8BFF
        }

        .whys .why:nth-child(2) {
            --gold: #35B36B
        }

        .whys .why:nth-child(3) {
            --gold: #F0607A
        }

        /* Accent type over PHOTOGRAPHY keeps the light tint and its scrim. A gradient
   clipped to text carries no scrim of its own, and both heroes put their
   eyebrow on a full-bleed photograph. The background has to be reset as well as
   the colour, or the clipped gradient stays sitting behind the letters. */

        .hero .eyebrow,
        .dhero .eyebrow {
            background: none;
            -webkit-background-clip: border-box;
            background-clip: border-box;
            color: var(--gold-soft);
            text-shadow: 0 1px 3px rgba(6, 11, 22, .95), 0 2px 18px rgba(6, 11, 22, .92)
        }

        .scrollcue {
            color: var(--gold-soft);
            text-shadow: 0 2px 10px rgba(6, 11, 22, .85)
        }
    </style>
</head>

<body>

    <div id="intro">
        <div class="lbl">Stevenson&rsquo;s</div>
        <div class="n" id="introN">1</div>
        <div class="sub">Top 100 Attractions</div>
    </div>

    <nav class="nav" id="nav">
        <div class="brand">
            <img class="logo"
                src=""
                alt="Stevenson's Top 100 Attractions">
            <span class="bcol">
                <span class="name">Stevenson&rsquo;s Top 100</span>
                <span class="nav-soc">
                    <a href="https://www.facebook.com/Top100AttractionsUKIRELAND" target="_blank" rel="noopener"
                        aria-label="Facebook"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z" />
                        </svg></a>
                    <a href="https://x.com/top100attractio" target="_blank" rel="noopener"
                        aria-label="X, formerly Twitter"><svg width="12" height="12" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z" />
                        </svg></a>
                    <a href="https://www.instagram.com/top100attractions" target="_blank" rel="noopener"
                        aria-label="Instagram"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.8">
                            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                        </svg></a>
                </span>
            </span>
        </div>
        <div class="links">
            <a href='/search'>ATTRACTIONS</a><a href="#">PLACES TO STAY</a><a href="#">PLACES TO EAT</a><a
                href='/search'>MAP</a><a href="#">THE BOOK</a>
        </div>
        <div class="actions">
            <a aria-label='Search all places' class='nav-search' href='/search' id='navSearch'><svg viewBox="0 0 24 24"
                    width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round">
                    <circle cx="10.5" cy="10.5" r="7" />
                    <path d="M21 21l-5.2-5.2" />
                </svg>SEARCH</a>
            <span class="lang-pill">&#127760; EN &#9662;</span>
            <a class="cta" href="#">GET THE APP</a>
        </div>
        <button class="burger" id="burger" aria-label="Open menu"><span></span><span></span><span></span></button>
    </nav>
    <div id="mnav">
        <button class="close" id="mclose" aria-label="Close menu">&times;</button>
        <a href='/search'>Attractions</a><a href="#">Places to Stay</a><a href="#">Places to Eat</a>
        <a href='/search'>Map</a><a href="#">The Book</a><a href="#" style="color:var(--gold)">Get the App</a>
        <a href="#" style="font-size:16px;color:var(--mist)">&#127760; Language: English</a>
        <span class="foot-soc">
            <a href="https://www.facebook.com/Top100AttractionsUKIRELAND" target="_blank" rel="noopener"
                aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z" />
                </svg></a>
            <a href="https://x.com/top100attractio" target="_blank" rel="noopener" aria-label="X, formerly Twitter"><svg
                    width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z" />
                </svg></a>
            <a href="https://www.instagram.com/top100attractions" target="_blank" rel="noopener"
                aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.8">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                </svg></a>
        </span>
    </div>

    <header class="hero" id="hero">
        <div class="photo kb1 active" data-mplx="18"
            style="background-image:url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=2400&q=80')">
        </div>
        <div class="photo kb2" data-mplx="18"
            style="background-image:url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=2400&q=75')">
        </div>
        <div class="photo kb3" data-mplx="18"
            style="background-image:url('https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=2400&q=75')">
        </div>
        <div class="scrim"></div>
        <div class="glow" data-mplx="34"></div>
        <div class="hundred" data-plx="70">100</div>
        <div class="spark" style="left:16%;top:30%;animation-delay:.4s"></div>
        <div class="spark" style="left:24%;top:62%;animation-delay:2.1s"></div>
        <div class="spark" style="left:38%;top:22%;animation-delay:3.4s"></div>
        <div class="spark" style="left:64%;top:26%;animation-delay:1.2s"></div>
        <div class="spark" style="left:78%;top:48%;animation-delay:4.6s"></div>
        <div class="spark" style="left:86%;top:30%;animation-delay:2.8s"></div>
        <div class="spark" style="left:70%;top:68%;animation-delay:5.2s"></div>
        <div class="spark" style="left:30%;top:76%;animation-delay:3.9s"></div>
        <div class="inner" id="heroInner">
            <div id="heroCopy">
                <img class="herologo rv"
                    src=""
                    alt="Stevenson's Top 100 Attractions badge">
                <div class="eyebrow rv" style="--d:.1s">The UK&rsquo;s Leading Tourist Information Website</div>
                <h1>
                    <span class="wline"><span style="transition-delay:.35s">Places worth</span></span>
                    <span class="wline"><span style="transition-delay:.5s"><em class="grad"
                                style="font-style:normal">the journey.</em></span></span>
                </h1>
                <p class="sub rv" style="--d:.9s">Attractions, places to stay and to eat across Britain and Ireland,
                    selected and reviewed to the Stevenson&rsquo;s standard.</p>
            </div>
            <div class="search rv" style="--d:1.15s">
                <span class="q">Where would you like to go?</span>
                <span class="q q2">What would you like to do? <i class="chev">&#9662;</i></span>
                <span class="seg">
                    <span class="segbtn on">&#9638; Grid</span>
                    <span class="segbtn">&#8982; Map</span>
                </span>
                <span class="go">SEARCH</span>
            </div>
        </div>
        <div class="scrollcue">Scroll</div>
    </header>

    <div class="marquee">
        <div class="fade l"></div>
        <div class="fade r"></div>
        <div class="track" id="marqueeTrack">
            <span class="item">Titanic Belfast <i>&#9733;</i></span>
            <span class="item">Conwy Castle <i>&#9733;</i></span>
            <span class="item">Powerscourt Estate <i>&#9733;</i></span>
            <span class="item">Bodnant Garden <i>&#9733;</i></span>
            <span class="item">The Salthouse Hotel <i>&#9733;</i></span>
            <span class="item">Snowdon Mountain Railway <i>&#9733;</i></span>
            <span class="item">The Merchant Hotel <i>&#9733;</i></span>
            <span class="item">Portmeirion Village <i>&#9733;</i></span>
        </div>
    </div>

    <section class="section" id="featured">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">In the Spotlight</span></div>
            <h2 class="h2 rv" style="--d:.1s">Start with <span class="grad">the standouts.</span></h2>

            <div class="entry">
                <div class="media rv">
                    <div class="frame">
                        <div class="ph"><img data-pimg
                                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1400&q=75"
                                alt="Bodnant Garden"></div>
                    </div>
                </div>
                <div>
                    <span class="chip rv"><b>Featured Attraction &middot; Wales</b></span>
                    <h3 class="rv" style="--d:.08s">Bodnant Garden</h3>
                    <div class="where rv" style="--d:.14s">Tal-y-Cafn, Conwy Valley, North Wales</div>
                    <blockquote class="rv" style="--d:.2s">Eighty acres of pure horticultural theatre. Time your visit
                        for the laburnum arch and thank me later.
                        <span class="who">JOSH STEVENSON</span>
                    </blockquote>
                    <a class='more rv' href='/detail' style='--d:.26s'>READ THE FULL REVIEW <span>&rarr;</span></a>
                </div>
            </div>

            <div class="entry flip">
                <div class="media rv">
                    <div class="frame">
                        <div class="ph"><img data-pimg
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=75"
                                alt="The Jackdaw, Conwy"></div>
                    </div>
                </div>
                <div>
                    <span class="chip rv"><b>Featured Place to Eat &middot; Wales</b></span>
                    <h3 class="rv" style="--d:.08s">The Jackdaw</h3>
                    <div class="where rv" style="--d:.14s">Conwy, North Wales</div>
                    <blockquote class="rv" style="--d:.2s">Modern Welsh cooking with serious ambition, five minutes from
                        the castle walls. Book the tasting menu and let them show off.
                        <span class="who">JOSH STEVENSON</span>
                    </blockquote>
                    <a class='more rv' href='/detail' style='--d:.26s'>VIEW THE FULL LISTING <span>&rarr;</span></a>
                </div>
            </div>

            <div class="entry">
                <div class="media rv">
                    <div class="frame">
                        <div class="ph"><img data-pimg
                                src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1400&q=75"
                                alt="Bodysgallen Hall and Spa"></div>
                    </div>
                </div>
                <div>
                    <span class="chip rv"><b>Featured Place to Stay &middot; Wales</b></span>
                    <h3 class="rv" style="--d:.08s">Bodysgallen Hall &amp; Spa</h3>
                    <div class="where rv" style="--d:.14s">Llandudno, North Wales</div>
                    <blockquote class="rv" style="--d:.2s">A seventeenth century manor with Snowdonia filling every
                        window. Arrive for one night and you will wish you had booked three.
                        <span class="who">JOSH STEVENSON</span>
                    </blockquote>
                    <a class='more rv' href='/detail' style='--d:.26s'>VIEW THE FULL LISTING <span>&rarr;</span></a>
                </div>
            </div>

            <div class="interlude rv">
                <img data-pimg src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=70"
                    alt="Mountain landscape">
                <div class="veil"></div>
                <div class="txt">
                    <b>The map opens up.</b>
                    <span>From landmark days out to memorable meals and stays, there is more to discover in every
                        direction.</span>
                    <a class='cta' href='/search' style='display:inline-block;margin-top:26px'>EXPLORE ALL</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="regions" style="padding-top:40px">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">Explore by Region</span></div>
            <h2 class="h2 rv" style="--d:.1s">One standard. <span class="grad">Five very different adventures.</span>
            </h2>
            <div class="nations">
                <div class="nation wales rv">
                    <img src="https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?w=900&q=70"
                        alt="Conwy Castle and its walled town from the air, Wales">
                    <div class="wash"></div>
                    <div class="teaser">
                        <div class="t-item">Conwy Castle <i>Conwy</i></div>
                        <div class="t-item">Portmeirion Village <i>Gwynedd</i></div>
                        <div class="t-item">Bodnant Garden <i>Conwy Valley</i></div>
                        <span class="t-all">EXPLORE WALES &rarr;</span>
                    </div>
                    <div class="label"><b>Wales</b><i>TAP TO EXPLORE &rarr;</i></div>
                </div>
                <div class="nation england rv" style="--d:.1s">
                    <img src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&q=70" alt="England">
                    <div class="wash"></div>
                    <div class="teaser">
                        <div class="t-item">Tower of London <i>London</i></div>
                        <div class="t-item">The Eden Project <i>Cornwall</i></div>
                        <div class="t-item">Windsor Great Park <i>Berkshire</i></div>
                        <span class="t-all">EXPLORE ENGLAND &rarr;</span>
                    </div>
                    <div class="label"><b>England</b><i>TAP TO EXPLORE &rarr;</i></div>
                </div>
                <div class="nation ireland rv" style="--d:.2s">
                    <img src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=900&q=70" alt="Ireland">
                    <div class="wash"></div>
                    <div class="teaser">
                        <div class="t-item">Powerscourt Estate <i>County Wicklow</i></div>
                        <div class="t-item">Cliffs of Moher <i>County Clare</i></div>
                        <div class="t-item">Guinness Storehouse <i>Dublin</i></div>
                        <span class="t-all">EXPLORE IRELAND &rarr;</span>
                    </div>
                    <div class="label"><b>Ireland</b><i>TAP TO EXPLORE &rarr;</i></div>
                </div>
                <div class="nation nireland rv" style="--d:.3s">
                    <img src="https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?w=900&q=70"
                        alt="Northern Ireland">
                    <div class="wash"></div>
                    <div class="teaser">
                        <div class="t-item">Titanic Belfast <i>Belfast</i></div>
                        <div class="t-item">Giant&rsquo;s Causeway <i>County Antrim</i></div>
                        <div class="t-item">The Merchant Hotel <i>Belfast</i></div>
                        <span class="t-all">EXPLORE NORTHERN IRELAND &rarr;</span>
                    </div>
                    <div class="label"><b>Northern Ireland</b><i>TAP TO EXPLORE &rarr;</i></div>
                </div>
                <div class="nation scotland rv" style="--d:.4s">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=70" alt="Scotland">
                    <div class="wash"></div>
                    <div class="teaser">
                        <div class="t-item">Edinburgh Castle <i>Edinburgh</i></div>
                        <div class="t-item">Loch Lomond <i>The Trossachs</i></div>
                        <div class="t-item">Isle of Skye <i>The Hebrides</i></div>
                        <span class="t-all">EXPLORE SCOTLAND &rarr;</span>
                    </div>
                    <div class="label"><b>Scotland</b><i>TAP TO EXPLORE &rarr;</i></div>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="figures" style="padding-top:40px">
        <div class="wrap">
            <div class="stats rv">
                <div class="stat"><b data-count="5000" data-suffix="+">0</b><span>Places listed</span></div>
                <div class="stat"><b data-count="5">0</b><span>Regions covered</span></div>
                <div class="stat"><b data-count="30" data-suffix="+">0</b><span>Years in hospitality</span></div>
                <div class="stat"><b data-count="1">0</b><span>Voice you can trust</span></div>
            </div>
        </div>
    </section>

    <section class="section" style="padding-top:40px;padding-bottom:0">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">From the Books</span></div>
            <h2 class="h2 rv" style="--d:.1s">Thirty years in print. <span class="grad">Millions of days out.</span>
            </h2>
        </div>
        <div class="wall rv" style="--d:.2s">
            <div class="fade l"></div>
            <div class="fade r"></div>
            <div class="row">
                <div class="track2" id="wall1">
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;The only guide we trust when planning our summer. It has never once let us
                            down.&rdquo;</p><span>The Harpers &middot; Kent</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;Josh sent us to places we would never have found on our own.&rdquo;</p><span>Reader
                            review</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;The definitive word on British and Irish days out.&rdquo;</p><span>Travel press</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;Our copy is dog-eared, highlighted and utterly loved.&rdquo;</p><span>The Morgans
                            &middot; Leeds</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;Every recommendation landed. Every single one.&rdquo;</p><span>Reader review</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;A national institution in paperback form.&rdquo;</p><span>Press quote</span>
                    </div>
                </div>
            </div>
            <div class="row rev" style="margin-top:14px">
                <div class="track2" id="wall2">
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;Bought one for every family we know. It is that good.&rdquo;</p><span>Reader
                            review</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;The app made our Scotland trip effortless from start to finish.&rdquo;</p><span>The
                            Frasers &middot; Stirling</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;Thirty years of knowing exactly where to go. Remarkable.&rdquo;</p><span>Travel
                            press</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;We plan every school holiday around this list.&rdquo;</p><span>The Patels &middot;
                            Birmingham</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;If it is in the Top 100, it is worth the drive. Simple as that.&rdquo;</p><span>Reader
                            review</span>
                    </div>
                    <div class="qcard">
                        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <p>&ldquo;The gold standard of tourism guides.&rdquo;</p><span>Press quote</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap" style="margin-top:64px">
            <div class="duo">
                <div class="panelcard bookp rv">
                    <h3>The books that<br>started it all.</h3>
                    <p>The best-selling Top 100 guides, available from all main book stores, online and direct.</p>
                    <a class="btn" href="#">BUY THE BOOK ONLINE</a>
                    <div class="book"><b>TOP <i>100</i><br>ATTRACTIONS</b><span>STEVENSON&rsquo;S GUIDES</span></div>
                </div>
                <div class="panelcard appp rv" style="--d:.15s">
                    <div class="appdots"></div>
                    <h3>Four free apps.<br>One trusted standard.</h3>
                    <p>England, Scotland, Wales and Ireland, always in your pocket.</p>
                    <div class="storebtns"><span>&#63743; App Store</span><span>&#9654; Google Play</span></div>
                </div>
                <a class='imgcard rv' href='/search'>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=70"
                        alt="Green upland valley beneath crags">
                    <div class="veil"></div>
                    <div class="meta">
                        <span class="vchip">Top 100 Attractions</span>
                        <h3>The National Trust</h3>
                    </div>
                </a>
                <a class="imgcard video rv" style="--d:.15s" href="#" aria-label="Play the featured video">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1445964047600-cdbdb873673d?w=1200&q=70"
                        alt="Estate woodland, featured video still">
                    <div class="veil"></div>
                    <span class="play"></span>
                    <div class="meta">
                        <span class="vchip">Featured Video</span>
                        <h3>Powerscourt Estate &amp; Gardens</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="inner">
            <div class="fbrand">
                <img class="flogo" src="logo.png" id="footLogo" alt="Top 100 Attractions badge">
                <div>
                    <div class="brandline">Stevenson&rsquo;s Top 100</div>
                    <p style="margin-top:10px">Britain and Ireland&rsquo;s definitive guide to quality days out.</p>
                    <div class="brandbar">
                        <span style="background:#C31A35"></span><span style="background:#00356B"></span><span
                            style="background:#00843D"></span><span style="background:#6C2BD9"></span><span
                            style="background:#007FFF"></span>
                        <em>One family &middot; five regions</em>
                    </div>
                    <div class="foot-soc">
                        <a href="https://www.facebook.com/Top100AttractionsUKIRELAND" target="_blank" rel="noopener"
                            aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z" />
                            </svg></a>
                        <a href="https://x.com/top100attractio" target="_blank" rel="noopener"
                            aria-label="X, formerly Twitter"><svg width="13" height="13" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z" />
                            </svg></a>
                        <a href="https://www.instagram.com/top100attractions" target="_blank" rel="noopener"
                            aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="1.8">
                                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                            </svg></a>
                    </div>
                </div>
            </div>
            <div>
                <h4>Explore</h4>
                <ul>
                    <li>Attractions</li>
                    <li>Places to Stay</li>
                    <li>Places to Eat</li>
                    <li>Map view</li>
                </ul>
            </div>
            <div>
                <h4>Regions</h4>
                <ul>
                    <li>Wales</li>
                    <li>England</li>
                    <li>Ireland</li>
                    <li>Northern Ireland</li>
                    <li>Scotland</li>
                </ul>
            </div>
            <div>
                <h4>Top 100</h4>
                <ul>
                    <li>About Us</li>
                    <li>Buy the Book</li>
                    <li>Get the Free App</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div class="base">&copy; 2026 Ryvel &middot; Founder Muhammad Afaq, design concept for Top&nbsp;100 Attractions
        </div>
    </footer>

    <script>
        (function () {
            var doc = document.documentElement;
            doc.classList.add('js');
            var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // 'loaded' (masked headline reveal) is owned by the intro script at the end of the page

            // duplicate marquee content for seamless loop
            var track = document.getElementById('marqueeTrack');
            if (track) track.innerHTML += track.innerHTML;

            // scroll reveals
            var io = new IntersectionObserver(function (es) {
                es.forEach(function (e) {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io.unobserve(e.target);
                    }
                });
            }, {
                rootMargin: '-70px 0px',
                threshold: 0.05
            });
            document.querySelectorAll('.rv').forEach(function (el) {
                io.observe(el);
            });
            setTimeout(function () {
                document.querySelectorAll('.rv:not(.in)').forEach(function (el) {
                    var r = el.getBoundingClientRect();
                    if (r.top < innerHeight && r.bottom > 0) el.classList.add('in');
                });
            }, 1600); // settle fallback

            // count-up stats
            // Replays every time the row comes back into view, up the page or down it.
            // Leaving the viewport resets the figure so the next arrival counts from
            // zero; the _run flag stops a second entry restarting a run still in flight.
            var cio = new IntersectionObserver(function (es) {
                es.forEach(function (e) {
                    var el = e.target,
                        target = +el.dataset.count,
                        suf = el.dataset.suffix || '';
                    if (!e.isIntersecting) {
                        el._run = false;
                        el.textContent = '0';
                        return;
                    }
                    if (reduced) {
                        el.textContent = target.toLocaleString('en-GB') + suf;
                        return;
                    }
                    if (el._run) return;
                    el._run = true;
                    var t0 = null;

                    function tick(t) {
                        if (!t0) t0 = t;
                        var p = Math.min(1, (t - t0) / 1400);
                        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString('en-GB') + suf;
                        if (p < 1 && el._run) requestAnimationFrame(tick);
                    }
                    requestAnimationFrame(tick);
                });
            }, {
                threshold: 0.4
            });
            document.querySelectorAll('[data-count]').forEach(function (el) {
                cio.observe(el);
            });

            // nav frosting + docked search pill once the hero search is gone
            var nav = document.getElementById('nav');
            var navSearch = document.getElementById('navSearch');

            function onNav() {
                nav.classList.toggle('scrolled', scrollY > 40);
                if (navSearch) navSearch.classList.toggle('show', scrollY > innerHeight * 0.85);
            }
            addEventListener('scroll', onNav, {
                passive: true
            });
            onNav();

            // ghost 100: visible ink aligns exactly with the hero support line (desktop only)
            var ghostN = document.querySelector('.hero .hundred');
            var subLine = document.querySelector('#heroCopy .sub');

            function sizeGhost() {
                if (!ghostN || !subLine) return;
                if (innerWidth < 981) {
                    ghostN.style.fontSize = '';
                    ghostN.style.marginLeft = '';
                    return;
                }
                var rng = document.createRange();
                rng.selectNodeContents(subLine);
                var w = rng.getBoundingClientRect().width;
                if (!w) return;
                var ctx = (sizeGhost.c = sizeGhost.c || document.createElement('canvas')).getContext('2d');
                ctx.font = '900 100px Overlock, sans-serif';
                var m = ctx.measureText('100');
                if (m.actualBoundingBoxLeft === undefined || m.actualBoundingBoxRight === undefined) {
                    ghostN.style.fontSize = '100px';
                    var gw = ghostN.getBoundingClientRect().width;
                    if (gw) ghostN.style.fontSize = (100 * w / gw) + 'px';
                    return;
                }
                var inkStart = -m.actualBoundingBoxLeft;
                var inkW = m.actualBoundingBoxRight - inkStart;
                if (inkW <= 0) return;
                var scale = w / inkW;
                ghostN.style.fontSize = (100 * scale) + 'px';
                /* centre the ink, not the glyph box: the "1" carries dead space on its left */
                ghostN.style.marginLeft = (scale * ((m.width - inkW) / 2 - inkStart)) + 'px';
            }
            addEventListener('resize', sizeGhost);
            sizeGhost();
            if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeGhost);

            if (reduced) return; // everything below is additive motion

            // scroll-driven parallax + hero scrub, one rAF loop
            var plx = [].slice.call(document.querySelectorAll('[data-plx]'));
            var pimgs = [].slice.call(document.querySelectorAll('[data-pimg]'));
            var heroInner = document.getElementById('heroInner');
            var heroCopy = document.getElementById('heroCopy');
            var heroSearch = document.querySelector('#heroInner .search');
            var hero = document.getElementById('hero');
            var marquee = document.querySelector('.marquee');
            var ticking = false;

            function frame() {
                ticking = false;
                var vh = innerHeight;
                plx.forEach(function (el) {
                    var r = el.getBoundingClientRect();
                    var p = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5-ish around center
                    el.style.transform = 'translateY(' + (-p * (+el.dataset.plx)) + 'px)' + (el.classList.contains('hundred') ? ' translateX(-50%)' : '');
                });
                pimgs.forEach(function (img) {
                    var r = img.parentElement.getBoundingClientRect();
                    var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
                    img.style.transform = 'translateY(' + (p * 34) + 'px)';
                });
                if (hero) {
                    // The lockup holds until the marquee sitting under the hero has climbed
                    // past the middle of the screen, then fades and lifts away before the
                    // hero clears the top. Anchored on the marquee's real offset rather than
                    // a share of the viewport: the hero is content-sized, so its height moves
                    // with the badge and with how the headline wraps.
                    var anchor = marquee ? marquee.offsetTop : hero.offsetHeight;
                    var from = anchor - vh * 0.55,
                        to = anchor - vh * 0.12;
                    var fp = Math.max(0, Math.min(1, (scrollY - from) / Math.max(1, to - from)));
                    heroCopy.style.opacity = 1 - fp;
                    // search holds while the headline exits, then makes a late exit of its own
                    // (inline transition:none while scrubbing, or the .rv reveal transition lags it)
                    var so = fp > 0.5 ? Math.max(0, 1 - (fp - 0.5) * 2.4) : '';
                    if (so !== '') heroSearch.style.transition = 'none'; // once scrubbed, stays scrub-controlled
                    heroSearch.style.opacity = so;
                    heroInner.style.transform = 'translateY(' + (fp * 110) + 'px) scale(' + (1 - fp * 0.06) + ')';
                }
            }

            function onScroll() {
                if (!ticking) {
                    ticking = true;
                    requestAnimationFrame(frame);
                }
            }
            addEventListener('scroll', onScroll, {
                passive: true
            });
            frame();

            // gentle mouse parallax on hero layers (desktop pointers only)
            if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
                var mx = 0,
                    my = 0,
                    tx = 0,
                    ty = 0;
                var layers = [].slice.call(document.querySelectorAll('[data-mplx]'));
                addEventListener('mousemove', function (e) {
                    tx = (e.clientX / innerWidth - 0.5);
                    ty = (e.clientY / innerHeight - 0.5);
                }, {
                    passive: true
                });
                (function lerp() {
                    mx += (tx - mx) * 0.06;
                    my += (ty - my) * 0.06;
                    layers.forEach(function (el) {
                        var f = +el.dataset.mplx;
                        el.style.translate = (-mx * f) + 'px ' + (-my * f) + 'px';
                    });
                    requestAnimationFrame(lerp);
                })();
            }
        })();
    </script>
    <script>
        (function () {
            var doc = document.documentElement;
            var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

            /* 1. opening title moment: 1 -> 100 counter, then dissolve and fire the headline reveal */
            var intro = document.getElementById('intro'),
                nEl = document.getElementById('introN');

            function endIntro() {
                if (intro && !intro.classList.contains('done')) {
                    intro.classList.add('done');
                }
                doc.classList.add('loaded');
                [].slice.call(document.querySelectorAll('#heroInner .rv')).forEach(function (el) {
                    el.classList.add('in');
                });
            }
            if (reduced || !intro) {
                endIntro();
            } else {
                var t0 = null,
                    DUR = 1500;

                function step(t) {
                    if (!t0) t0 = t;
                    var p = Math.min(1, (t - t0) / DUR);
                    nEl.textContent = Math.max(1, Math.round(100 * (1 - Math.pow(1 - p, 3))));
                    if (p < 1) requestAnimationFrame(step);
                    else setTimeout(endIntro, 380);
                }
                requestAnimationFrame(step);
            }
            setTimeout(endIntro, 3800); // settle fallback: never trap the page behind the intro

            /* 5. hero crossfade between three Ken Burns layers */
            var photos = [].slice.call(document.querySelectorAll('.hero .photo'));
            if (photos.length > 1 && !reduced) {
                var pi = 0;
                setInterval(function () {
                    pi = (pi + 1) % photos.length;
                    photos.forEach(function (p, j) {
                        p.classList.toggle('active', j === pi);
                    });
                }, 7500);
            }

            /* footer badge reuses the embedded nav logo so the file stays self-contained */
            var fl = document.getElementById('footLogo'),
                nl = document.querySelector('.nav .logo');
            if (fl && nl) fl.src = nl.src;

            /* 3. nation panels expand on tap/click, one open at a time */
            [].slice.call(document.querySelectorAll('.nation')).forEach(function (n) {
                n.addEventListener('click', function (ev) {
                    if (ev.target.closest('.t-all') || ev.target.closest('.t-item')) return;
                    var was = n.classList.contains('open');
                    [].slice.call(document.querySelectorAll('.nation.open')).forEach(function (o) {
                        o.classList.remove('open');
                    });
                    if (!was) n.classList.add('open');
                });
            });

            /* 4. duplicate wall tracks for seamless loops */
            ['wall1', 'wall2'].forEach(function (id) {
                var t = document.getElementById(id);
                if (t) t.innerHTML += t.innerHTML;
            });

            /* search grid/map segment toggle */
            [].slice.call(document.querySelectorAll('.seg')).forEach(function (seg) {
                seg.addEventListener('click', function (e) {
                    var btn = e.target.closest('.segbtn');
                    if (!btn) return;
                    [].slice.call(seg.querySelectorAll('.segbtn')).forEach(function (b) {
                        b.classList.toggle('on', b === btn);
                    });
                });
            });

            /* 6. mobile menu */
            var b = document.getElementById('burger'),
                m = document.getElementById('mnav'),
                c = document.getElementById('mclose');
            if (b && m) {
                b.addEventListener('click', function () {
                    m.classList.add('open');
                });
                if (c) c.addEventListener('click', function () {
                    m.classList.remove('open');
                });
                m.addEventListener('click', function (e) {
                    if (e.target.tagName === 'A') m.classList.remove('open');
                });
            }
        })();
    </script>
</body>

</html>