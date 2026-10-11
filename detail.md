<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!-- This site is hosted on Netlify. Anyone can build and deploy a site
     like this one for free: https://netlify.new/?utm_campaign=loops&utm_source=ai-legible&utm_medium=owned&utm_content=comment&utm_id=df1dc718-3b0f-4d78-82ed-49ecebe12913
     Netlify hosting facts for this site: static/SSR served via Netlify Edge. -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bodnant Garden | Top 100 Attractions (logo colours)</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Overlock:wght@400;700;900&family=Raleway:ital,wght@0,400;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet">
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
            color: var(--mist);
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

        /* ---------- hero ---------- */

        .hero {
            position: relative;
            min-height: 100svh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: 118px 0 110px
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

        .hero .photo.kb1 {
            animation: kbZoomOut 24s linear infinite alternate
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

        .hero .inner {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 0 24px;
            max-width: 1100px
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
            .footer .inner {
                grid-template-columns: 1fr 1fr
            }
            .hero {
                padding: 104px 0 80px
            }
        }

        @media (max-width: 640px) {
            .footer .inner {
                grid-template-columns: 1fr
            }
        }

        /* ============================================================
   PAGE-SPECIFIC: attraction detail, Nº 23 Bodnant Garden
   ============================================================ */

        :root {
            --mist-bright: #CBD3E4
        }

        /* detail hero: 86vh, content bottom-left */

        .dhero {
            min-height: 86vh;
            align-items: flex-end;
            justify-content: flex-start;
            padding: 118px 0 0
        }

        .dhero .inner {
            text-align: left;
            margin: 0;
            max-width: 960px;
            padding: 0 44px 96px
        }

        .dhero h1 {
            margin: 14px 0 10px
        }

        .dhero .where {
            color: var(--mist);
            font-weight: 600;
            font-size: 15.5px;
            letter-spacing: .06em
        }

        /* the verdict band */

        .verdict {
            background: var(--bg-deep);
            padding: 130px 44px 120px
        }

        .verdict .vq {
            font-family: var(--display);
            font-weight: 900;
            font-style: normal;
            font-size: clamp(30px, 3.8vw, 58px);
            line-height: 1.16;
            color: #fff;
            max-width: 1080px;
            margin-top: 26px
        }

        /* plan-your-visit card (contact + map merged) */

        .visitcard {
            margin-top: 56px;
            display: grid;
            grid-template-columns: 1fr 1.55fr;
            border: 1.5px solid transparent;
            border-radius: 26px;
            overflow: hidden;
            background: linear-gradient(150deg, var(--panel), var(--panel-2)) padding-box, linear-gradient(100deg, rgba(53, 179, 107, .45), rgba(110, 139, 255, .45) 35%, rgba(240, 96, 122, .45) 65%, rgba(var(--gold-rgb), .5)) border-box
        }

        .vinfo {
            padding: 46px 44px;
            display: flex;
            flex-direction: column;
            gap: 24px
        }

        .vinfo .dirs {
            align-self: flex-start;
            margin-top: 2px;
            display: inline-block;
            background: var(--gold);
            color: #0A1122;
            font-weight: 800;
            font-size: 12px;
            letter-spacing: .18em;
            padding: 13px 22px;
            border-radius: 999px;
            transition: transform .3s var(--ease), box-shadow .3s var(--ease)
        }

        .vinfo .dirs:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(var(--gold-rgb), .35)
        }

        .fact .flabel {
            display: block;
            color: var(--gold);
            font-size: 11.5px;
            font-weight: 800;
            letter-spacing: .24em;
            text-transform: uppercase;
            margin-bottom: 10px
        }

        .fact .fval {
            display: block;
            color: var(--cream);
            font-size: 16.5px;
            font-weight: 600;
            line-height: 1.55;
            overflow-wrap: anywhere
        }

        .vinfo .fval a {
            border-bottom: 1.5px solid rgba(var(--gold-rgb), .35);
            padding-bottom: 2px;
            transition: color .3s var(--ease), border-color .3s var(--ease)
        }

        .vinfo .fval a:hover {
            color: var(--gold);
            border-color: var(--gold)
        }

        .socials {
            display: flex;
            gap: 10px;
            margin-top: 4px
        }

        .socials a {
            width: 42px;
            height: 42px;
            border: 1.5px solid rgba(var(--gold-rgb), .4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
            transition: background .3s var(--ease), border-color .3s var(--ease), transform .3s var(--ease)
        }

        .socials a:hover {
            background: rgba(var(--gold-rgb), .12);
            border-color: var(--gold);
            transform: translateY(-3px)
        }

        /* gallery grid */

        .gal {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 190px;
            grid-auto-flow: dense;
            gap: 14px;
            margin-top: 56px
        }

        .gitem {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(var(--gold-rgb), .14)
        }

        .gitem img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.1s var(--ease)
        }

        .gitem:hover img {
            transform: scale(1.06)
        }

        .gitem::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 55%, rgba(6, 11, 22, .5));
            opacity: 0;
            transition: opacity .5s var(--ease);
            pointer-events: none
        }

        .gitem:hover::after {
            opacity: 1
        }

        .gitem.big {
            grid-column: span 2;
            grid-row: span 2
        }

        .gitem.tall {
            grid-row: span 2
        }

        .gitem.wide {
            grid-column: span 2
        }

        /* film card: the video leads the media section, as it now does in the apps.
   Poster is the frame that used to open the grid, so the page gains a video
   without gaining a photograph. */

        .filmcard {
            position: relative;
            display: block;
            margin-top: 56px;
            border-radius: 26px;
            overflow: hidden;
            height: clamp(300px, 40vw, 520px);
            border: 1px solid rgba(var(--gold-rgb), .16);
            cursor: pointer
        }

        .filmcard img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s var(--ease)
        }

        .filmcard:hover img {
            transform: scale(1.04)
        }

        .filmcard .veil {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(6, 11, 22, .14) 0%, rgba(6, 11, 22, .44) 52%, rgba(6, 11, 22, .92) 100%)
        }

        .filmcard .play {
            position: absolute;
            left: 50%;
            top: 45%;
            transform: translate(-50%, -50%);
            width: 76px;
            height: 76px;
            border-radius: 50%;
            background: linear-gradient(110deg, var(--gold), var(--gold-deep));
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 16px 44px rgba(0, 0, 0, .5), 0 0 0 12px rgba(var(--gold-rgb), .13);
            transition: transform .35s var(--ease), box-shadow .35s var(--ease)
        }

        .filmcard:hover .play {
            transform: translate(-50%, -50%) scale(1.1);
            box-shadow: 0 20px 54px rgba(var(--gold-rgb), .32), 0 0 0 14px rgba(var(--gold-rgb), .18)
        }

        .filmcard .play::after {
            content: "";
            margin-left: 6px;
            border-style: solid;
            border-width: 13px 0 13px 21px;
            border-color: transparent transparent transparent #141B2E
        }

        .fmeta {
            position: absolute;
            left: 34px;
            right: 34px;
            bottom: 28px
        }

        .fchip {
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

        .fmeta h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(24px, 2.4vw, 36px);
            color: #fff;
            margin-top: 12px;
            line-height: 1.1
        }

        .fmeta p {
            color: var(--mist);
            font-size: 13.5px;
            margin-top: 7px
        }

        .filmcard+.gal {
            margin-top: 16px
        }

        @media (max-width:760px) {
            .filmcard {
                height: 260px
            }
            .fmeta {
                left: 20px;
                right: 20px;
                bottom: 20px
            }
        }

        /* the description takes the pull quote's slot, so it keeps that block's scale
   but loses the quotation mark, which belonged to a quotation */

        .verdict .kicker {
            margin-bottom: 8px
        }

        .verdict .vq {
            margin-top: 22px
        }

        /* map half of the visit card */

        .vmap {
            position: relative;
            background: var(--panel-2);
            border-left: 1px solid rgba(var(--gold-rgb), .16);
            min-height: 560px
        }

        .vmap svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            display: block
        }

        .vmap text {
            font-family: var(--body);
            fill: var(--mist);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: .18em
        }

        .vmap .waterlab {
            fill: rgba(185, 193, 212, .45);
            font-style: italic;
            letter-spacing: .3em;
            font-size: 11px
        }

        .vmap .roadlab {
            fill: rgba(185, 193, 212, .5);
            font-size: 10px
        }

        .vmap .pinlab {
            fill: var(--gold);
            font-family: var(--display);
            font-weight: 900;
            font-size: 15px;
            letter-spacing: .14em
        }

        .pin-ring {
            transform-box: fill-box;
            transform-origin: center;
            animation: ping 2.4s var(--ease) infinite
        }

        @keyframes ping {
            0% {
                transform: scale(.35);
                opacity: .9
            }
            100% {
                transform: scale(1.7);
                opacity: 0
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .pin-ring {
                animation: none;
                opacity: .25
            }
        }

        /* nearby cards: location line */

        .gcard .gloc {
            display: block;
            color: var(--mist);
            font-size: 13px;
            margin-top: 6px
        }

        /* editorial body */

        .prose {
            max-width: 70ch
        }

        .prose p {
            color: var(--mist-bright);
            font-size: 16.5px;
            line-height: 1.85;
            margin-top: 22px
        }

        /* before you go: the case in three points */

        .whys {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 34px;
            margin-top: 64px
        }

        .why .wnum {
            font-family: var(--display);
            font-weight: 900;
            font-size: 84px;
            line-height: 1;
            color: transparent;
            -webkit-text-stroke: 2px var(--gold);
            user-select: none
        }

        .why h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: 23px;
            color: #fff;
            margin: 18px 0 8px
        }

        .why p {
            color: var(--mist);
            font-size: 15px
        }

        /* more like this: search-grid cards */

        .mlgrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 22px;
            margin-top: 56px
        }

        .gcard {
            display: block;
            border: 1.5px solid transparent;
            border-radius: 20px;
            overflow: hidden;
            background: linear-gradient(var(--panel), var(--panel)) padding-box, linear-gradient(100deg, rgba(53, 179, 107, .45), rgba(110, 139, 255, .45) 35%, rgba(240, 96, 122, .45) 65%, rgba(var(--gold-rgb), .5)) border-box;
            transition: transform .5s var(--ease), box-shadow .5s var(--ease)
        }

        .gcard:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 60px rgba(0, 0, 0, .5)
        }

        .gcard .gph {
            position: relative;
            height: 215px;
            overflow: hidden
        }

        .gcard .gph img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.1s var(--ease)
        }

        .gcard:hover .gph img {
            transform: scale(1.07)
        }

        .gcard .gph::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 40%, rgba(16, 26, 48, .85))
        }

        .gcard .gbody {
            padding: 20px 22px 24px
        }

        .gcard .gchip {
            display: inline-block;
            background: rgba(var(--gold-rgb), .12);
            border: 1px solid rgba(var(--gold-rgb), .4);
            color: var(--gold);
            font-size: 10.5px;
            font-weight: 800;
            letter-spacing: .2em;
            text-transform: uppercase;
            border-radius: 999px;
            padding: 5px 13px;
            margin-bottom: 12px
        }

        .gcard h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: 22px;
            color: #fff
        }

        @media (max-width: 980px) {
            .dhero .inner {
                padding: 0 20px 76px
            }
            .verdict {
                padding: 90px 20px
            }
            .visitcard {
                grid-template-columns: 1fr
            }
            .vinfo {
                padding: 34px 26px 30px
            }
            .vmap {
                border-left: 0;
                border-top: 1px solid rgba(var(--gold-rgb), .16);
                min-height: 420px
            }
            .whys {
                grid-template-columns: 1fr;
                gap: 40px
            }
            .gal {
                grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: 150px
            }
            .mlgrid {
                grid-template-columns: repeat(2, 1fr)
            }
        }

        @media (max-width: 640px) {
            .gal {
                grid-template-columns: 1fr;
                grid-auto-rows: 220px
            }
            .gitem.big,
            .gitem.tall {
                grid-row: auto;
                grid-column: auto
            }
            .gitem.wide {
                grid-column: auto
            }
            .vmap {
                min-height: 340px
            }
            .mlgrid {
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

    <nav class="nav" id="nav">
        <div class="brand">
            <a href='/cinematic-concept'><img class="logo" src="logo.png" alt="Top 100 Attractions"></a>
            <span class="bcol">
      <span class="name">Stevenson&rsquo;s Top 100</span>
            <span class="nav-soc">
        <a href="https://www.facebook.com/Top100AttractionsUKIRELAND" target="_blank" rel="noopener" aria-label="Facebook"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z"/></svg></a>
        <a href="https://x.com/top100attractio" target="_blank" rel="noopener" aria-label="X, formerly Twitter"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z"/></svg></a>
        <a href="https://www.instagram.com/top100attractions" target="_blank" rel="noopener" aria-label="Instagram"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg></a>
      </span>
            </span>
        </div>
        <div class="links">
            <a href='/search'>ATTRACTIONS</a><a href='/cinematic-concept'>PLACES TO STAY</a><a href='/cinematic-concept'>PLACES TO EAT</a><a href='/cinematic-concept'>MAP</a><a href='/cinematic-concept'>THE BOOK</a>
        </div>
        <div class="actions">
            <span class="lang-pill">&#127760; EN &#9662;</span>
            <a class='cta' href='/cinematic-concept'>GET THE APP</a>
        </div>
        <button class="burger" id="burger" aria-label="Open menu"><span></span><span></span><span></span></button>
    </nav>
    <div id="mnav">
        <button class="close" id="mclose" aria-label="Close menu">&times;</button>
        <a href='/search'>Attractions</a><a href='/cinematic-concept'>Places to Stay</a><a href='/cinematic-concept'>Places to Eat</a>
        <a href='/cinematic-concept'>Map</a><a href='/cinematic-concept'>The Book</a><a href='/cinematic-concept' style='color:var(--gold)'>Get the App</a>
        <a href='/cinematic-concept' style='font-size:16px;color:var(--mist)'>&#127760; Language: English</a>
        <span class="foot-soc">
    <a href="https://www.facebook.com/Top100AttractionsUKIRELAND" target="_blank" rel="noopener" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z"/></svg></a>
    <a href="https://x.com/top100attractio" target="_blank" rel="noopener" aria-label="X, formerly Twitter"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z"/></svg></a>
    <a href="https://www.instagram.com/top100attractions" target="_blank" rel="noopener" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg></a>
  </span>
    </div>

    <!-- 2. cinematic hero -->
    <header class="hero dhero" id="hero">
        <div class="photo kb1 active" style="background-image:url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=2400&q=80')"></div>
        <div class="scrim"></div>
        <div class="inner" id="heroInner">
            <div class="eyebrow rv" style="--d:.1s">Attraction &middot; Garden &middot; Wales</div>
            <h1><span class="wline"><span style="transition-delay:.35s">Bodnant Garden.</span></span>
            </h1>
            <div class="where rv" style="--d:.55s">Tal-y-Cafn, Conwy Valley, North Wales</div>
        </div>
        <div class="scrollcue">Scroll</div>
    </header>

    <!-- 3. the verdict -->
    <section class="verdict" id="about">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">About</span></div>
            <p class="vq rv" style="--d:.1s">A National Trust garden on the slopes above the Conwy Valley, running from the house at the top of the ground down to the river at the bottom.
                <span class="grad">Steep in places, and a long walk from end to end.</span></p>
        </div>
    </section>

    <!-- 4. editorial body + parallax band -->
    <section class="section" style="padding-bottom:0">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">What Josh Says</span></div>
            <h2 class="h2 rv" style="--d:.1s">Eighty acres, <span class="grad">zero filler.</span></h2>
            <div class="prose">
                <p class="rv" style="--d:.15s">Start at the top and take the Italianate terraces in order. There are five, stepping down the hillside with a confidence that borders on arrogance: roses on one level, a lily pond on the next, and at the bottom the Pin Mill, sitting at
                    the end of its canal as if it had been rehearsing the reflection for years.</p>
                <p class="rv" style="--d:.25s">Then drop into the Dell and the mood changes entirely. This is the wild half, a steep wooded valley along the river, planted with champion trees that have had more than a century to get on with it. Climb back out and the garden plays its
                    final card: the view, wide open across the valley to the mountains beyond.</p>
            </div>
        </div>
    </section>

    <!-- 4b. before you go -->
    <section class="section" id="why" style="padding-bottom:0">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">Before You Go</span></div>
            <h2 class="h2 rv" style="--d:.1s">Everything to know about <span class="grad">Bodnant Garden.</span></h2>
            <div class="whys">
                <div class="why rv">
                    <div class="wnum">01</div>
                    <h3>The Laburnum Arch</h3>
                    <p>Fifty five metres of gold, three weeks a year.</p>
                </div>
                <div class="why rv" style="--d:.12s">
                    <div class="wnum">02</div>
                    <h3>The Italianate terraces</h3>
                    <p>Five of them, stepping down toward the river.</p>
                </div>
                <div class="why rv" style="--d:.24s">
                    <div class="wnum">03</div>
                    <h3>The Dell</h3>
                    <p>Champion trees and the tallest redwood in Wales.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. plan your visit -->
    <section class="section" id="visit" style="padding-bottom:0">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">Plan Your Visit</span></div>
            <h2 class="h2 rv" style="--d:.1s">Get in touch, <span class="grad">get there.</span></h2>
            <div class="visitcard rv" style="--d:.15s">
                <div class="vinfo">
                    <div class="fact"><span class="flabel">Address</span><span class="fval">Bodnant Garden, Tal-y-Cafn<br>Conwy Valley, Wales LL28 5RE</span></div>
                    <div class="fact"><span class="flabel">Telephone</span><span class="fval"><a href="tel:+441492650460">+44 1492 650 460</a></span></div>
                    <div class="fact"><span class="flabel">Email</span><span class="fval"><a href="mailto:bodnantgarden@nationaltrust.org.uk">bodnantgarden@nationaltrust.org.uk</a></span></div>
                    <div class="fact"><span class="flabel">Website</span><span class="fval"><a href="https://www.nationaltrust.org.uk/visit/wales/bodnant-garden" target="_blank" rel="noopener">nationaltrust.org.uk</a></span></div>
                    <div class="fact"><span class="flabel">Follow</span><span class="socials">
          <a href="https://www.facebook.com/Top100AttractionsUKIRELAND" target="_blank" rel="noopener" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z"/></svg></a>
          <a href="https://x.com/top100attractio" target="_blank" rel="noopener" aria-label="X, formerly Twitter"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z"/></svg></a>
          <a href="https://www.instagram.com/top100attractions" target="_blank" rel="noopener" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg></a>
        </span></div>
                    <a class="dirs" href="https://maps.google.com/?q=Bodnant+Garden,+Tal-y-Cafn" target="_blank" rel="noopener">GET DIRECTIONS &#8599;</a>
                </div>
                <div class="vmap">
                    <svg viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Stylised map of the Conwy Valley with Bodnant Garden pinned">
        <rect width="1200" height="560" fill="#0D1528"/>
        <g fill="none" stroke="rgba(185,193,212,.06)" stroke-width="1.5">
          <ellipse cx="330" cy="300" rx="210" ry="150"/>
          <ellipse cx="330" cy="300" rx="140" ry="95"/>
          <ellipse cx="1010" cy="380" rx="180" ry="130"/>
          <ellipse cx="1010" cy="380" rx="110" ry="75"/>
        </g>
        <path d="M0 0 H1200 V70 Q1050 96 900 84 Q780 74 720 96 Q660 116 560 92 Q400 60 240 84 Q120 100 0 78 Z" fill="rgba(76,110,190,.16)"/>
        <text class="waterlab" x="410" y="46">CONWY BAY</text>
        <path d="M718 84 Q760 120 744 168" fill="none" stroke="rgba(76,110,190,.3)" stroke-width="44" stroke-linecap="round"/>
        <path d="M718 92 Q740 150 716 200 Q690 250 706 300 Q724 350 700 400 Q676 450 700 500 Q712 530 706 560" fill="none" stroke="rgba(76,110,190,.34)" stroke-width="26" stroke-linecap="round"/>
        <g stroke="rgba(185,193,212,.28)" stroke-width="3" fill="none">
          <path d="M0 132 Q300 118 600 138 Q900 158 1200 136"/>
          <path d="M786 120 Q800 240 762 330 Q730 420 754 560"/>
        </g>
        <g stroke="rgba(185,193,212,.16)" stroke-width="2" fill="none">
          <path d="M672 180 Q650 300 664 420 Q672 480 650 560"/>
          <path d="M700 402 L744 398"/>
        </g>
        <text class="roadlab" x="330" y="122">A55</text>
        <text class="roadlab" x="806" y="252">A470</text>
        <g fill="rgba(185,193,212,.75)">
          <circle cx="872" cy="92" r="4.5"/>
          <circle cx="806" cy="140" r="4"/>
          <circle cx="662" cy="168" r="4.5"/>
          <circle cx="700" cy="402" r="4"/>
          <circle cx="656" cy="528" r="4"/>
        </g>
        <text x="856" y="88" text-anchor="end">LLANDUDNO</text>
        <text x="790" y="136" text-anchor="end">DEGANWY</text>
        <text x="566" y="162">CONWY</text>
        <text x="552" y="396">TAL-Y-CAFN</text>
        <text x="470" y="548">BETWS-Y-COED</text>
        <g stroke="rgba(185,193,212,.25)" stroke-width="2" fill="none">
          <path d="M300 330 l14 -18 l14 18"/><path d="M350 360 l14 -18 l14 18"/><path d="M270 385 l14 -18 l14 18"/>
        </g>
        <text x="332" y="316" opacity=".7">THE CARNEDDAU</text>
        <circle class="pin-ring" cx="760" cy="432" r="26" fill="none" stroke="#FABF33" stroke-width="2"/>
        <circle cx="760" cy="432" r="9" fill="#FABF33"/>
        <circle cx="760" cy="432" r="3" fill="#0A1122"/>
        <text class="pinlab" x="736" y="438" text-anchor="end">BODNANT GARDEN</text>
        <g stroke="rgba(185,193,212,.5)" stroke-width="2" fill="none">
          <path d="M856 496 V456"/><path d="M848 468 L856 456 L864 468"/>
        </g>
        <text x="850" y="516">N</text>
        <path d="M320 508 H440 M320 502 V514 M440 502 V514" stroke="rgba(185,193,212,.4)" stroke-width="2" fill="none"/>
        <text class="roadlab" x="346" y="498">2 MILES</text>
      </svg>

                </div>
            </div>
        </div>
    </section>

    <!-- 5c. gallery -->
    <section class="section" id="gallery" style="padding-bottom:0">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">Film &amp; Gallery</span></div>
            <h2 class="h2 rv" style="--d:.1s">See it <span class="grad">before you see it.</span></h2>
            <a class="filmcard rv" href="#" aria-label="Play the Bodnant Garden film">
      <img loading="lazy" src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1200&q=70" alt="Bodnant Garden, film still">
      <span class="veil"></span>
      <span class="play"></span>
      <div class="fmeta">
        <span class="fchip">Video</span>
        <h3>Bodnant Garden on film</h3>
        <p>YouTube, Vimeo or a direct file, set per business in the CRM.</p>
      </div>
    </a>

            <div class="gal">
                <div class="gitem tall rv" style="--d:.05s"><img loading="lazy" src="https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&q=70" alt="The river running through the Dell"></div>
                <div class="gitem rv" style="--d:.1s"><img loading="lazy" src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=800&q=70" alt="A rose on the upper terraces"></div>
                <div class="gitem tall rv" style="--d:.15s"><img loading="lazy" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=70" alt="Sunlight through the woodland walk"></div>
                <div class="gitem rv" style="--d:.2s"><img loading="lazy" src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=70" alt="Massed begonias in high summer"></div>
                <div class="gitem rv" style="--d:.25s"><img loading="lazy" src="https://images.unsplash.com/photo-1469259943454-aa100abba749?w=800&q=70" alt="Lilies in the borders"></div>
                <div class="gitem tall rv" style="--d:.3s"><img loading="lazy" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=70" alt="One of the champion trees"></div>
                <div class="gitem wide rv" style="--d:.35s"><img loading="lazy" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=70" alt="The view over the green valley"></div>
                <div class="gitem rv" style="--d:.4s"><img loading="lazy" src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=70" alt="Morning mist in the pinetum"></div>
                <div class="gitem rv" style="--d:.45s"><img loading="lazy" src="https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=800&q=70" alt="A water lily on the terrace pond"></div>
                <div class="gitem wide rv" style="--d:.5s"><img loading="lazy" src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=70" alt="Autumn light through the trees"></div>
                <div class="gitem rv" style="--d:.55s"><img loading="lazy" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=70" alt="Poppies in the wildflower meadow"></div>
            </div>
        </div>
    </section>

    <!-- 8. stay nearby -->
    <section class="section" id="stay" style="padding-bottom:0">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">Make a night of it</span></div>
            <h2 class="h2 rv" style="--d:.1s">Stay <span class="grad">nearby.</span></h2>
            <div class="mlgrid">
                <a class='gcard rv' href='/search'>
                    <div class="gph"><img loading="lazy" src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=70" alt="Bodysgallen Hall and Spa"></div>
                    <div class="gbody"><span class="gchip">Place to Stay &middot; Wales</span>
                        <h3>Bodysgallen Hall &amp; Spa</h3><span class="gloc">Llandudno &middot; 6 miles away</span></div>
                </a>
                <a class='gcard rv' href='/search' style='--d:.12s'>
                    <div class="gph"><img loading="lazy" src="https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=70" alt="The Quay Hotel and Spa"></div>
                    <div class="gbody"><span class="gchip">Place to Stay &middot; Wales</span>
                        <h3>The Quay Hotel &amp; Spa</h3><span class="gloc">Deganwy &middot; 6 miles away</span></div>
                </a>
                <a class='gcard rv' href='/search' style='--d:.24s'>
                    <div class="gph"><img loading="lazy" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=70" alt="The Castle Hotel, Conwy"></div>
                    <div class="gbody"><span class="gchip">Place to Stay &middot; Wales</span>
                        <h3>The Castle Hotel</h3><span class="gloc">Conwy &middot; 5 miles away</span></div>
                </a>
            </div>
        </div>
    </section>

    <!-- 8b. eat nearby -->
    <section class="section" id="eat" style="padding-bottom:0">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">And eat well</span></div>
            <h2 class="h2 rv" style="--d:.1s">Eat <span class="grad">nearby.</span></h2>
            <div class="mlgrid">
                <a class='gcard rv' href='/search'>
                    <div class="gph"><img loading="lazy" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=70" alt="The Jackdaw, Conwy"></div>
                    <div class="gbody"><span class="gchip">Place to Eat &middot; Wales</span>
                        <h3>The Jackdaw</h3><span class="gloc">Conwy &middot; 5 miles away</span></div>
                </a>
                <a class='gcard rv' href='/search' style='--d:.12s'>
                    <div class="gph"><img loading="lazy" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=70" alt="Paysanne, Deganwy"></div>
                    <div class="gbody"><span class="gchip">Place to Eat &middot; Wales</span>
                        <h3>Paysanne</h3><span class="gloc">Deganwy &middot; 6 miles away</span></div>
                </a>
                <a class='gcard rv' href='/search' style='--d:.24s'>
                    <div class="gph"><img loading="lazy" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=70" alt="Watson's Bistro, Conwy"></div>
                    <div class="gbody"><span class="gchip">Place to Eat &middot; Wales</span>
                        <h3>Watson&rsquo;s Bistro</h3><span class="gloc">Conwy &middot; 5 miles away</span></div>
                </a>
            </div>
        </div>
    </section>

    <!-- 9. more like this -->
    <section class="section" id="more" style="padding-bottom:0">
        <div class="wrap">
            <div class="kicker rv"><span class="line"></span><span class="eyebrow">Keep exploring</span></div>
            <h2 class="h2 rv" style="--d:.1s">Attractions <span class="grad">nearby.</span></h2>
            <div class="mlgrid">
                <a class='gcard rv' href='/search'>
                    <div class="gph"><img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=70" alt="Conwy Castle"></div>
                    <div class="gbody"><span class="gchip">Attraction &middot; Wales</span>
                        <h3>Conwy Castle</h3>
                    </div>
                </a>
                <a class='gcard rv' href='/search' style='--d:.12s'>
                    <div class="gph"><img src="https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=70" alt="Zip World Penrhyn Quarry"></div>
                    <div class="gbody"><span class="gchip">Attraction &middot; Wales</span>
                        <h3>Zip World Penrhyn Quarry</h3>
                    </div>
                </a>
                <a class='gcard rv' href='/search' style='--d:.24s'>
                    <div class="gph"><img src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=70" alt="Portmeirion Village"></div>
                    <div class="gbody"><span class="gchip">Attraction &middot; Wales</span>
                        <h3>Portmeirion Village</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- 10. footer -->
    <footer class="footer">
        <div class="inner">
            <div class="fbrand">
                <img class="flogo" src="logo.png" alt="Top 100 Attractions badge">
                <div>
                    <div class="brandline">Stevenson&rsquo;s Top 100</div>
                    <p style="margin-top:10px">Britain and Ireland&rsquo;s definitive guide to quality days out.</p>
                    <div class="brandbar">
                        <span style="background:#C31A35"></span><span style="background:#00356B"></span><span style="background:#00843D"></span><span style="background:#6C2BD9"></span><span style="background:#007FFF"></span>
                        <em>One family &middot; five regions</em>
                    </div>
                    <div class="foot-soc">
                        <a href="https://www.facebook.com/Top100AttractionsUKIRELAND" target="_blank" rel="noopener" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z"/></svg></a>
                        <a href="https://x.com/top100attractio" target="_blank" rel="noopener" aria-label="X, formerly Twitter"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z"/></svg></a>
                        <a href="https://www.instagram.com/top100attractions" target="_blank" rel="noopener" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg></a>
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
        <div class="base">&copy; 2026 Ryvel &middot; Founder Muhammad Afaq, design concept for Top&nbsp;100 Attractions</div>
    </footer>

    <script>
        (function() {
            var doc = document.documentElement;
            doc.classList.add('js');
            var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // 'loaded' (masked headline reveal) is owned by the init script at the end of the page

            // scroll reveals
            var io = new IntersectionObserver(function(es) {
                es.forEach(function(e) {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io.unobserve(e.target);
                    }
                });
            }, {
                rootMargin: '-70px 0px',
                threshold: 0.05
            });
            document.querySelectorAll('.rv').forEach(function(el) {
                io.observe(el);
            });
            setTimeout(function() {
                document.querySelectorAll('.rv:not(.in)').forEach(function(el) {
                    var r = el.getBoundingClientRect();
                    if (r.top < innerHeight && r.bottom > 0) el.classList.add('in');
                });
            }, 1600); // settle fallback

            // nav frosting
            var nav = document.getElementById('nav');

            function onNav() {
                nav.classList.toggle('scrolled', scrollY > 40);
            }
            addEventListener('scroll', onNav, {
                passive: true
            });
            onNav();

            if (reduced) return; // everything below is additive motion

            // scroll-driven parallax + hero scrub, one rAF loop
            var plx = [].slice.call(document.querySelectorAll('[data-plx]'));
            var pimgs = [].slice.call(document.querySelectorAll('[data-pimg]'));
            var heroInner = document.getElementById('heroInner');
            var hero = document.getElementById('hero');
            var ticking = false;

            function frame() {
                ticking = false;
                var vh = innerHeight;
                plx.forEach(function(el) {
                    var r = el.getBoundingClientRect();
                    var p = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5-ish around center
                    el.style.transform = 'translateY(' + (-p * (+el.dataset.plx)) + 'px)';
                });
                pimgs.forEach(function(img) {
                    var r = img.parentElement.getBoundingClientRect();
                    var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
                    img.style.transform = 'translateY(' + (p * 34) + 'px)';
                });
                if (hero) {
                    var hp = Math.max(0, Math.min(1, scrollY / (vh * 0.9)));
                    heroInner.style.opacity = 1 - hp * 1.1;
                    heroInner.style.transform = 'translateY(' + (hp * 130) + 'px) scale(' + (1 - hp * 0.06) + ')';
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
        })();
    </script>
    <script>
        (function() {
            var doc = document.documentElement;

            /* no intro overlay on this page: reveal the hero immediately on load.
               mirrors the concept's endIntro sweep for #heroInner .rv, staggered by each
               element's inline --d delay. content is never trapped if JS fails. */
            function go() {
                doc.classList.add('loaded');
                [].slice.call(document.querySelectorAll('#heroInner .rv')).forEach(function(el) {
                    el.classList.add('in');
                });
            }
            if (document.readyState !== 'loading') go();
            else document.addEventListener('DOMContentLoaded', go);
            setTimeout(go, 1200); // settle fallback

            /* mobile menu */
            var b = document.getElementById('burger'),
                m = document.getElementById('mnav'),
                c = document.getElementById('mclose');
            if (b && m) {
                b.addEventListener('click', function() {
                    m.classList.add('open');
                });
                if (c) c.addEventListener('click', function() {
                    m.classList.remove('open');
                });
                m.addEventListener('click', function(e) {
                    if (e.target.tagName === 'A') m.classList.remove('open');
                });
            }
        })();
    </script>
</body>

</html>