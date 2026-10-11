<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!-- This site is hosted on Netlify. Anyone can build and deploy a site
     like this one for free: https://netlify.new/?utm_campaign=loops&utm_source=ai-legible&utm_medium=owned&utm_content=comment&utm_id=df1dc718-3b0f-4d78-82ed-49ecebe12913
     Netlify hosting facts for this site: static/SSR served via Netlify Edge. -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The Book | Top 100 Attractions</title>
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
            box-shadow: 0 1px 0 rgba(250, 191, 51, .25)
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
            box-shadow: 0 8px 24px rgba(250, 191, 51, .35)
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
            background: linear-gradient(90deg, rgba(250, 191, 51, .5), transparent)
        }

        .nav-soc a {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 1px solid rgba(250, 191, 51, .45);
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
            background: rgba(250, 191, 51, .12);
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
            border: 1.5px solid rgba(250, 191, 51, .45);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
            transition: border-color .3s var(--ease), background .3s var(--ease), transform .3s var(--ease)
        }

        .foot-soc a:hover {
            border-color: var(--gold);
            background: rgba(250, 191, 51, .12);
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
            background: linear-gradient(90deg, rgba(0, 132, 61, .5), rgba(33, 69, 214, .45) 34%, rgba(195, 26, 53, .45) 66%, rgba(250, 191, 51, .55));
        }

        /* ---------- shared type + search bar ---------- */

        .eyebrow {
            font-size: 12.5px;
            letter-spacing: .34em;
            font-weight: 800;
            color: var(--gold);
            text-transform: uppercase
        }

        .grad {
            background: linear-gradient(110deg, var(--gold-soft) 10%, var(--gold) 45%, var(--gold-deep) 90%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        .search {
            margin: 32px auto 0;
            display: flex;
            align-items: center;
            width: min(1040px, 94%);
            background: rgba(16, 26, 48, .55);
            backdrop-filter: blur(14px) saturate(150%);
            border: 1px solid rgba(250, 191, 51, .35);
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
            background: rgba(250, 191, 51, .14);
            color: var(--gold);
            border-color: rgba(250, 191, 51, .4)
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
            box-shadow: 0 8px 26px rgba(250, 191, 51, .4)
        }

        .search .seg,
        .search .go {
            flex-shrink: 0
        }

        /* ---------- shared section chrome ---------- */

        .wrap {
            max-width: 1240px;
            margin: 0 auto
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

        .footer li a {
            transition: color .3s var(--ease)
        }

        .footer li a:hover {
            color: var(--gold)
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
            border-left: 1px solid rgba(250, 191, 51, .3)
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

        /* ============================================================
   PAGE-SPECIFIC: SEARCH RESULTS GRID
   ============================================================ */

        /* compact search hero */

        .shero {
            position: relative;
            min-height: 56vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: 200px 24px 84px;
            background: linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 100%)
        }

        .shero::before {
            content: "";
            position: absolute;
            left: 50%;
            top: -8%;
            width: 860px;
            height: 460px;
            transform: translateX(-50%);
            background: radial-gradient(ellipse, rgba(250, 191, 51, .1), transparent 65%);
            pointer-events: none
        }

        .ghost100 {
            position: absolute;
            left: 50%;
            top: 54%;
            transform: translate(-50%, -50%);
            z-index: 0;
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(220px, 26vw, 420px);
            line-height: 1;
            color: transparent;
            -webkit-text-stroke: 2.5px rgba(250, 191, 51, .3);
            filter: drop-shadow(0 0 30px rgba(250, 191, 51, .18));
            pointer-events: none;
            user-select: none
        }

        .shero .inner {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 0 24px;
            max-width: 1100px;
            width: 100%
        }

        .shero h1 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(40px, 5.6vw, 80px);
            line-height: 1.04;
            margin: 16px 0 6px;
            color: #fff;
            text-shadow: 0 4px 30px rgba(0, 0, 0, .5)
        }

        .shero .ssub {
            color: var(--mist);
            font-style: italic;
            font-size: 17px;
            margin: 8px 0 0
        }

        /* results section */

        .results {
            padding: 64px 44px 90px
        }

        /* toolbar */

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 22px;
            flex-wrap: wrap
        }

        .tcount {
            color: var(--mist);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: .05em
        }

        .tchips {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap
        }

        .fchip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(185, 193, 212, .35);
            color: var(--mist);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: .1em;
            text-transform: uppercase;
            border-radius: 999px;
            padding: 8px 16px;
            cursor: pointer;
            white-space: nowrap;
            transition: border-color .35s var(--ease), color .35s var(--ease), background .35s var(--ease), transform .35s var(--ease)
        }

        .fchip:hover {
            border-color: var(--gold);
            color: var(--gold);
            transform: translateY(-1px)
        }

        .fchip.on {
            border-color: var(--gold);
            color: var(--gold);
            background: rgba(250, 191, 51, .1)
        }

        .fchip i {
            font-style: normal;
            color: var(--gold)
        }

        /* results grid */

        .rgrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px 28px;
            margin-top: 52px
        }

        .rcard {
            position: relative;
            display: block;
            background: var(--panel);
            border: 1px solid rgba(185, 193, 212, .14);
            border-radius: 18px;
            overflow: hidden;
            transition: transform .5s var(--ease), border-color .5s var(--ease), box-shadow .5s var(--ease)
        }

        .rcard::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 3;
            border-radius: 17px;
            padding: 1.5px;
            background: linear-gradient(100deg, rgba(53, 179, 107, .45), rgba(110, 139, 255, .45) 35%, rgba(240, 96, 122, .45) 65%, rgba(250, 191, 51, .5));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity .5s var(--ease);
            pointer-events: none
        }

        .rcard:hover {
            transform: translateY(-6px);
            border-color: transparent;
            box-shadow: 0 24px 60px rgba(0, 0, 0, .45)
        }

        .rcard:hover::before {
            opacity: 1
        }

        .rcard:focus-visible {
            outline: 2px solid var(--gold);
            outline-offset: 3px
        }

        .rph {
            position: relative
        }

        .rimg {
            aspect-ratio: 4/3;
            overflow: hidden
        }

        .rimg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.1s var(--ease)
        }

        .rcard:hover .rimg img {
            transform: scale(1.06)
        }

        .rtag {
            position: absolute;
            top: 12px;
            right: 12px;
            z-index: 2;
            background: linear-gradient(110deg, var(--gold), var(--gold-deep));
            color: #141B2E;
            font-size: 9.5px;
            font-weight: 800;
            letter-spacing: .22em;
            text-transform: uppercase;
            border-radius: 999px;
            padding: 5px 11px
        }

        .rbody {
            padding: 24px 24px 26px
        }

        .rbody h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: 24px;
            color: #fff;
            line-height: 1.15;
            margin: 12px 0 10px
        }

        .rchip {
            display: inline-block;
            background: rgba(250, 191, 51, .1);
            border: 1px solid rgba(250, 191, 51, .4);
            color: var(--gold);
            font-size: 10.5px;
            font-weight: 800;
            letter-spacing: .2em;
            text-transform: uppercase;
            border-radius: 999px;
            padding: 5px 13px
        }

        .rquote {
            font-style: italic;
            font-weight: 500;
            font-size: 14.5px;
            color: var(--cream);
            line-height: 1.65
        }

        /* pagination */

        .pagin {
            margin-top: 74px;
            text-align: center
        }

        .loadmore {
            display: inline-block;
            border: 1.5px solid var(--gold);
            color: var(--gold);
            font-family: var(--display);
            font-weight: 900;
            font-size: 15px;
            letter-spacing: .08em;
            padding: 14px 46px;
            border-radius: 999px;
            cursor: pointer;
            transition: background .35s var(--ease), color .35s var(--ease), transform .35s var(--ease), box-shadow .35s var(--ease)
        }

        .loadmore:hover {
            background: linear-gradient(110deg, var(--gold), var(--gold-deep));
            color: #141B2E;
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(250, 191, 51, .35)
        }

        /* page-specific responsive */

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
            .results {
                padding: 48px 20px 70px
            }
            .rgrid {
                grid-template-columns: repeat(2, 1fr);
                gap: 34px 20px
            }
            .toolbar {
                flex-direction: column;
                align-items: flex-start;
                gap: 16px
            }
            .ghost100 {
                font-size: 230px
            }
            .shero {
                padding: 160px 20px 60px
            }
            .footer .inner {
                grid-template-columns: 1fr 1fr
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
            .rgrid {
                grid-template-columns: 1fr;
                gap: 36px
            }
            .shero {
                min-height: auto
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

        /* ============================================================
   PAGE-SPECIFIC: BUY THE BOOK ONLINE
   ============================================================ */

        /* nav sits on gold until scrolled: ink, not mist */

        .nav:not(.scrolled) .links {
            color: rgba(20, 27, 46, .78)
        }

        .nav:not(.scrolled) .links a:hover {
            color: #141B2E
        }

        .nav:not(.scrolled) .brand .name {
            color: #141B2E
        }

        .nav:not(.scrolled) .lang-pill {
            border-color: rgba(20, 27, 46, .5);
            color: #141B2E
        }

        .nav:not(.scrolled) .lang-pill:hover {
            border-color: #141B2E;
            color: #141B2E
        }

        .nav:not(.scrolled) .cta {
            background: #141B2E;
            color: var(--gold)
        }

        .nav:not(.scrolled) .cta:hover {
            box-shadow: 0 8px 24px rgba(20, 27, 46, .35)
        }

        .nav:not(.scrolled) .nav-soc a {
            border-color: rgba(20, 27, 46, .45);
            color: #141B2E
        }

        .nav:not(.scrolled) .nav-soc a:hover {
            border-color: #141B2E;
            background: rgba(20, 27, 46, .08)
        }

        .nav:not(.scrolled) .nav-soc::after {
            background: linear-gradient(90deg, rgba(20, 27, 46, .5), transparent)
        }

        .nav:not(.scrolled) .burger span {
            background: #141B2E
        }

        /* The frosted state restates its colours explicitly. The ink override above works by
   inheritance, and a colour transition caught mid-flight (slow frame, capture) could
   otherwise leave ink text sitting on the dark frost. */

        .nav.scrolled .links,
        .nav.scrolled .links a {
            color: var(--mist);
            transition: none
        }

        .nav.scrolled .links a:hover {
            color: var(--gold)
        }

        .nav.scrolled .brand .name {
            color: #fff
        }

        .nav.scrolled .lang-pill {
            border-color: rgba(185, 193, 212, .45);
            color: var(--mist)
        }

        .nav.scrolled .cta {
            background: linear-gradient(110deg, var(--gold), var(--gold-deep));
            color: #141B2E
        }

        .nav.scrolled .nav-soc a {
            border-color: rgba(250, 191, 51, .45);
            color: var(--gold)
        }

        .nav.scrolled .nav-soc::after {
            background: linear-gradient(90deg, rgba(250, 191, 51, .5), transparent)
        }

        .nav.scrolled .burger span {
            background: var(--gold)
        }

        /* ---- gold split hero ---- */

        .bhero {
            position: relative;
            overflow: hidden;
            color: #141B2E;
            padding: 170px 44px 90px;
            background: linear-gradient(130deg, var(--gold) 0%, var(--gold-deep) 100%)
        }

        .bhero::before {
            content: "";
            position: absolute;
            right: -14%;
            top: -32%;
            width: 720px;
            height: 720px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 217, 122, .45), transparent 65%);
            pointer-events: none
        }

        .bhero::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 3px;
            background: linear-gradient(90deg, #00843D, #2145D6 34%, #C31A35 66%, #FABF33)
        }

        .bhero .wrap {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: 1.1fr .9fr;
            gap: 60px;
            align-items: center
        }

        .inkbrow {
            font-size: 12.5px;
            letter-spacing: .34em;
            font-weight: 800;
            color: rgba(20, 27, 46, .75);
            text-transform: uppercase
        }

        .bhero h1 {
            font-family: var(--display);
            font-weight: 900;
            font-size: clamp(44px, 5.6vw, 80px);
            line-height: 1.04;
            color: #141B2E;
            margin: 16px 0 6px
        }

        .bhero .bsub {
            font-size: 17px;
            font-weight: 600;
            color: rgba(20, 27, 46, .85);
            max-width: 540px;
            margin: 8px 0 0
        }

        .bcta {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
            margin-top: 34px
        }

        .btn-ink {
            display: inline-block;
            background: #141B2E;
            color: var(--gold);
            font-family: var(--display);
            font-weight: 900;
            font-size: 15px;
            letter-spacing: .05em;
            padding: 15px 30px;
            border-radius: 999px;
            cursor: pointer;
            transition: transform .3s var(--ease), box-shadow .3s var(--ease)
        }

        .btn-ink:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 26px rgba(20, 27, 46, .4)
        }

        .btn-inkline {
            display: inline-block;
            border: 1.5px solid #141B2E;
            color: #141B2E;
            font-family: var(--display);
            font-weight: 900;
            font-size: 15px;
            letter-spacing: .05em;
            padding: 13.5px 30px;
            border-radius: 999px;
            transition: background .3s var(--ease), transform .3s var(--ease)
        }

        .btn-inkline:hover {
            background: rgba(20, 27, 46, .08);
            transform: translateY(-2px)
        }

        .btn-ink:focus-visible,
        .btn-inkline:focus-visible {
            outline: 2px solid #141B2E;
            outline-offset: 3px
        }

        /* the big book (the homepage .book prop, page-scale) */

        .bookstage {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 500px
        }

        .bb {
            width: 300px;
            height: 420px;
            border-radius: 8px 16px 16px 8px;
            border-left: 12px solid #0A1122;
            background: linear-gradient(150deg, #1F2A44, #0D1528)
        }

        .bb.back {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 1;
            transform: translate(-50%, -50%) translate(-34px, 18px) rotate(-4deg);
            background: linear-gradient(150deg, #16203A, #090F1E);
            border-left-color: #060B16;
            box-shadow: -18px 26px 50px rgba(20, 27, 46, .35)
        }

        .bb.front {
            position: relative;
            z-index: 2;
            transform: rotate(6deg);
            box-shadow: -30px 40px 80px rgba(20, 27, 46, .45);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 34px 26px;
            transition: transform .6s var(--ease)
        }

        .bookstage:hover .bb.front {
            transform: rotate(2deg) scale(1.02)
        }

        .bb.front .blogo {
            width: 90px;
            height: auto;
            filter: drop-shadow(0 4px 14px rgba(0, 0, 0, .5));
            margin-bottom: 20px
        }

        .bb.front b {
            font-family: var(--display);
            font-weight: 900;
            color: #fff;
            font-size: 30px;
            line-height: 1.15;
            display: block
        }

        .bb.front b i {
            font-style: normal;
            color: var(--gold)
        }

        .bb.front .crule {
            display: block;
            width: 60px;
            height: 1px;
            background: var(--gold);
            margin: 18px 0
        }

        .bb.front .imprint {
            display: block;
            font-size: 10px;
            letter-spacing: .18em;
            color: var(--mist);
            font-weight: 700
        }

        /* ---- section chrome (from the approved concept) ---- */

        .section {
            position: relative;
            padding: 110px 44px
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

        .shead {
            margin-bottom: 52px
        }

        /* ---- what's inside cards ---- */

        .icards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 22px
        }

        .icard {
            position: relative;
            border: 1.5px solid transparent;
            border-radius: 24px;
            padding: 40px 34px 36px;
            background: linear-gradient(150deg, var(--panel), var(--panel-2)) padding-box, linear-gradient(120deg, rgba(250, 191, 51, .55), rgba(185, 193, 212, .12)) border-box;
            transition: transform .5s var(--ease), box-shadow .5s var(--ease)
        }

        .icard:hover {
            transform: translateY(-7px);
            box-shadow: 0 30px 70px rgba(0, 0, 0, .5)
        }

        .icard .glyph {
            font-family: var(--display);
            font-weight: 900;
            font-size: 56px;
            line-height: 1;
            background: linear-gradient(110deg, var(--gold-soft), var(--gold-deep));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent
        }

        .icard h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: 24px;
            color: #fff;
            line-height: 1.15;
            margin: 18px 0 10px
        }

        .icard p {
            color: var(--mist);
            font-size: 14.5px
        }

        /* ---- reader quotes (static row of the approved quote wall cards) ---- */

        .qcard {
            width: 340px;
            background: var(--panel);
            border: 1px solid rgba(250, 191, 51, .22);
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

        .qgrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 22px
        }

        .qgrid .qcard {
            width: auto
        }

        /* ---- app closer panel ---- */

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

        .panelcard.appp {
            border: 1.5px solid transparent;
            background: linear-gradient(var(--panel), var(--panel)) padding-box, linear-gradient(100deg, rgba(53, 179, 107, .45), rgba(110, 139, 255, .45) 35%, rgba(240, 96, 122, .45) 65%, rgba(250, 191, 51, .5)) border-box
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
            border: 1.5px solid rgba(250, 191, 51, .5);
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
            background: rgba(250, 191, 51, .12);
            transform: translateY(-2px)
        }

        .storebtns a {
            background: linear-gradient(110deg, var(--gold), var(--gold-deep));
            color: #141B2E;
            font-weight: 800;
            font-size: 12.5px;
            letter-spacing: .06em;
            padding: 13.5px 20px;
            border-radius: 12px;
            transition: transform .3s var(--ease), box-shadow .3s var(--ease)
        }

        .storebtns a:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 22px rgba(250, 191, 51, .35)
        }

        .storebtns a:focus-visible {
            outline: 2px solid var(--gold);
            outline-offset: 3px
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

        /* solo closer: same panel, content centred so the full width reads as deliberate */

        .panelcard.appp.solo {
            align-items: center;
            text-align: center
        }

        .panelcard.appp.solo p {
            margin-left: auto;
            margin-right: auto
        }

        .panelcard.appp.solo .storebtns {
            justify-content: center;
            flex-wrap: wrap
        }

        /* ---- book page responsive ---- */

        @media (max-width: 980px) {
            .bhero {
                padding: 150px 20px 70px
            }
            .bhero .wrap {
                grid-template-columns: 1fr;
                gap: 44px
            }
            .section {
                padding: 80px 20px
            }
            .icards {
                grid-template-columns: 1fr
            }
            .qgrid {
                grid-template-columns: 1fr
            }
        }

        @media (max-width: 640px) {
            .bookstage {
                min-height: 400px
            }
            .bb {
                width: 240px;
                height: 336px;
                border-left-width: 10px
            }
            .bb.back {
                transform: translate(-50%, -50%) translate(-26px, 14px) rotate(-4deg)
            }
            .bb.front {
                padding: 26px 20px
            }
            .bb.front .blogo {
                width: 72px;
                margin-bottom: 16px
            }
            .bb.front b {
                font-size: 24px
            }
            .bb.front .crule {
                margin: 14px 0
            }
            .panelcard {
                padding: 44px 28px;
                min-height: 0
            }
            .storebtns {
                flex-wrap: wrap
            }
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
            <a href='/search'>ATTRACTIONS</a><a href='/search'>PLACES TO STAY</a><a href='/search'>PLACES TO EAT</a><a href='/map'>MAP</a><a href='/book'>THE BOOK</a>
        </div>
        <div class="actions">
            <span class="lang-pill">&#127760; EN &#9662;</span>
            <a class='cta' href='/app'>GET THE APP</a>
        </div>
        <button class="burger" id="burger" aria-label="Open menu"><span></span><span></span><span></span></button>
    </nav>
    <div id="mnav">
        <button class="close" id="mclose" aria-label="Close menu">&times;</button>
        <a href='/search'>Attractions</a><a href='/search'>Places to Stay</a><a href='/search'>Places to Eat</a>
        <a href='/map'>Map</a><a href='/book'>The Book</a><a href='/app' style='color:var(--gold)'>Get the App</a>
        <a href='/cinematic-concept' style='font-size:16px;color:var(--mist)'>&#127760; Language: English</a>
        <span class="foot-soc">
    <a href="https://www.facebook.com/Top100AttractionsUKIRELAND" target="_blank" rel="noopener" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z"/></svg></a>
    <a href="https://x.com/top100attractio" target="_blank" rel="noopener" aria-label="X, formerly Twitter"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z"/></svg></a>
    <a href="https://www.instagram.com/top100attractions" target="_blank" rel="noopener" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg></a>
  </span>
    </div>

    <!-- gold split hero -->
    <header class="bhero">
        <div class="wrap" id="heroInner">
            <div>
                <div class="inkbrow rv">Buy the Book Online</div>
                <h1>
                    <span class="wline"><span style="transition-delay:.3s">The books that started it all.</span></span>
                </h1>
                <p class="bsub rv" style="--d:.45s">The best-selling Top 100 guides, available from all main book stores, online and direct.</p>
                <div class="bcta rv" style="--d:.55s">
                    <span class="btn-ink">BUY THE BOOK ONLINE</span>
                    <a class='btn-inkline' href='/about'>HOW THE GUIDE WORKS</a>
                </div>
            </div>
            <div class="bookstage rv" style="--d:.35s">
                <div class="bb back" aria-hidden="true"></div>
                <div class="bb front">
                    <img class="blogo" src="logo.png" alt="Top 100 Attractions badge">
                    <b>TOP <i>100</i><br>ATTRACTIONS</b>
                    <span class="crule" aria-hidden="true"></span>
                    <span class="imprint">STEVENSON&rsquo;S GUIDES</span>
                </div>
            </div>
        </div>
    </header>

    <!-- what's inside -->
    <section class="section">
        <div class="wrap">
            <div class="shead rv">
                <div class="kicker"><span class="line"></span><span class="eyebrow">The Guide in Print</span></div>
                <h2 class="h2">What&rsquo;s inside</h2>
            </div>
            <div class="icards">
                <div class="icard rv">
                    <div class="glyph">100</div>
                    <h3>A hundred that earned it.</h3>
                    <p>Attractions, places to stay and places to eat across Britain and Ireland, every one visited before it was written up.</p>
                </div>
                <div class="icard rv" style="--d:.08s">
                    <div class="glyph">&#9733;</div>
                    <h3>Reviews you can hold.</h3>
                    <p>The full editorial review for every entry, in print, no screen required.</p>
                </div>
                <div class="icard rv" style="--d:.16s">
                    <div class="glyph">5</div>
                    <h3>Five regions, one shelf.</h3>
                    <p>England, Scotland, Wales, Northern Ireland and Ireland, covered with the same straight face.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- what readers find -->
    <section class="section" style="padding-top:40px">
        <div class="wrap">
            <div class="shead rv">
                <div class="kicker"><span class="line"></span><span class="eyebrow">From the Books</span></div>
                <h2 class="h2">What readers find</h2>
            </div>
            <div class="qgrid">
                <div class="qcard rv">
                    <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p>&ldquo;The only guide we trust when planning our summer. It has never once let us down.&rdquo;</p><span>The Harpers &middot; Kent</span></div>
                <div class="qcard rv" style="--d:.08s">
                    <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p>&ldquo;Our copy is dog-eared, highlighted and utterly loved.&rdquo;</p><span>The Morgans &middot; Leeds</span></div>
                <div class="qcard rv" style="--d:.16s">
                    <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p>&ldquo;A national institution in paperback form.&rdquo;</p><span>Press quote</span></div>
            </div>
        </div>
    </section>

    <!-- rather carry it? -->
    <section class="section" style="padding-top:40px;padding-bottom:0">
        <div class="wrap">
            <div class="panelcard appp solo rv">
                <div class="appdots"></div>
                <h3>Rather carry it in your pocket?</h3>
                <p>The same hundred, free on the app, one nation at a time.</p>
                <div class="storebtns"><span>&#63743; App Store</span><span>&#9654; Google Play</span><a href='/app'>SEE THE APPS</a></div>
            </div>
        </div>
    </section>

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
                    <li><a href='/search'>Attractions</a></li>
                    <li><a href='/search'>Places to Stay</a></li>
                    <li><a href='/search'>Places to Eat</a></li>
                    <li><a href='/map'>Map view</a></li>
                </ul>
            </div>
            <div>
                <h4>Regions</h4>
                <ul>
                    <li><a href='/wales'>Wales</a></li>
                    <li><a href='/search'>England</a></li>
                    <li><a href='/search'>Ireland</a></li>
                    <li><a href='/search'>Northern Ireland</a></li>
                    <li><a href='/search'>Scotland</a></li>
                </ul>
            </div>
            <div>
                <h4>Top 100</h4>
                <ul>
                    <li><a href='/about'>About Us</a></li>
                    <li><a href='/book'>Buy the Book</a></li>
                    <li><a href='/app'>Get the Free App</a></li>
                    <li><a href='/contact'>Contact Us</a></li>
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

            // 'loaded' (masked headline reveal) is owned by the second script

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

        })();
    </script>
    <script>
        (function() {
            var doc = document.documentElement;

            /* no intro overlay on this page: reveal the hero immediately, same sweep the concept runs after its counter */
            function reveal() {
                doc.classList.add('loaded');
                [].slice.call(document.querySelectorAll('#heroInner .rv')).forEach(function(el) {
                    el.classList.add('in');
                });
            }
            reveal();
            setTimeout(reveal, 1200); // settle fallback: never leave the hero hidden

            /* search grid/map segment toggle */
            [].slice.call(document.querySelectorAll('.seg')).forEach(function(seg) {
                seg.addEventListener('click', function(e) {
                    var btn = e.target.closest('.segbtn');
                    if (!btn) return;
                    [].slice.call(seg.querySelectorAll('.segbtn')).forEach(function(b) {
                        b.classList.toggle('on', b === btn);
                    });
                });
            });

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