<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!-- This site is hosted on Netlify. Anyone can build and deploy a site
     like this one for free: https://netlify.new/?utm_campaign=loops&utm_source=ai-legible&utm_medium=owned&utm_content=comment&utm_id=df1dc718-3b0f-4d78-82ed-49ecebe12913
     Netlify hosting facts for this site: static/SSR served via Netlify Edge. -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The Free App | Top 100 Attractions</title>
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
   PAGE-SPECIFIC: THE FREE APP
   ============================================================ */

        /* store buttons (pattern from the concept's app panel) */

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
            display: inline-flex;
            align-items: center;
            min-height: 44px;
            border: 1.5px solid rgba(250, 191, 51, .5);
            color: var(--gold);
            font-weight: 800;
            font-size: 12.5px;
            letter-spacing: .06em;
            padding: 11px 18px;
            border-radius: 12px;
            transition: background .3s var(--ease), transform .3s var(--ease)
        }

        .storebtns a:hover {
            background: rgba(250, 191, 51, .12);
            transform: translateY(-2px)
        }

        .storebtns a:focus-visible {
            outline: 2px solid var(--gold);
            outline-offset: 3px
        }

        .shero .storebtns {
            justify-content: center;
            margin-top: 30px
        }

        /* section head (pattern from the hub) */

        .shead {
            display: flex;
            align-items: center;
            gap: 18px;
            margin: 78px 0 26px
        }

        .shead h2 {
            font-family: var(--display);
            font-weight: 900;
            font-size: 27px;
            color: #fff;
            white-space: nowrap
        }

        .shead .rule {
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, rgba(250, 191, 51, .5), rgba(185, 193, 212, .08))
        }

        .shead .cap {
            font-size: 11px;
            letter-spacing: .22em;
            font-weight: 800;
            color: var(--mist);
            white-space: nowrap
        }

        /* the four phones */

        .phones {
            padding: 76px 44px 0
        }

        .prail {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 26px
        }

        .pframe {
            display: block;
            position: relative;
            border-radius: 40px;
            border: 1px solid rgba(185, 193, 212, .2);
            padding: 10px;
            background: linear-gradient(150deg, var(--panel), var(--panel-2));
            box-shadow: 0 30px 70px rgba(0, 0, 0, .5);
            transition: transform .5s var(--ease), box-shadow .5s var(--ease)
        }

        .pframe .notch {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 14px);
            width: 60px;
            height: 8px;
            border-radius: 999px;
            background: var(--bg-deep);
            z-index: 2
        }

        .pscreen {
            border-radius: 30px;
            overflow: hidden
        }

        .pscreen img {
            width: 100%;
            height: auto
        }

        .phone:hover .pframe {
            transform: translateY(-8px);
            box-shadow: 0 34px 80px rgba(var(--tint-rgb), .3)
        }

        .pframe:focus-visible {
            outline: 2px solid var(--gold);
            outline-offset: 3px;
            transform: translateY(-8px);
            box-shadow: 0 34px 80px rgba(var(--tint-rgb), .3)
        }

        .pmeta {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 20px 8px 0
        }

        .chip {
            width: 11px;
            height: 11px;
            border-radius: 50%;
            flex: 0 0 11px;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .28), 0 0 0 4px rgba(var(--tint-rgb), .14)
        }

        .pmeta .chip {
            margin-top: 6px
        }

        .pmeta h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: 18px;
            color: #fff;
            line-height: 1.2
        }

        .popen {
            display: inline-flex;
            align-items: center;
            min-height: 44px;
            margin: -11px 0 -12px;
            color: var(--gold);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: .18em;
            transition: color .3s var(--ease)
        }

        .popen:hover {
            color: var(--gold-soft)
        }

        .popen:focus-visible {
            outline: 2px solid var(--gold);
            outline-offset: 3px
        }

        /* what the app does */

        .features {
            padding: 0 44px
        }

        .fgrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px
        }

        .fcard {
            background: var(--panel);
            border: 1px solid rgba(185, 193, 212, .14);
            border-radius: 22px;
            padding: 34px;
            transition: border-color .5s var(--ease)
        }

        .fcard:hover {
            border-color: rgba(250, 191, 51, .5)
        }

        .fico {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 1.5px solid rgba(250, 191, 51, .5);
            color: var(--gold);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px
        }

        .fcard h3 {
            font-family: var(--display);
            font-weight: 900;
            font-size: 20px;
            color: #fff;
            margin-bottom: 8px
        }

        .fcard p {
            font-size: 14px;
            color: var(--mist);
            line-height: 1.65
        }

        /* one family */

        .family {
            padding: 64px 44px 0
        }

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

        .appdots {
            position: absolute;
            right: -30px;
            bottom: -30px;
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 132, 61, .35), transparent 65%)
        }

        .family .panelcard.appp p {
            max-width: 560px
        }

        /* the free app: responsive */

        @media (max-width:1080px) {
            .prail {
                grid-template-columns: repeat(2, 1fr);
                gap: 34px 26px
            }
        }

        @media (max-width: 980px) {
            .phones {
                padding: 56px 20px 0
            }
            .features,
            .family {
                padding-left: 20px;
                padding-right: 20px
            }
            .fgrid {
                grid-template-columns: 1fr
            }
            .shead .cap {
                display: none
            }
        }

        @media (max-width: 640px) {
            .prail {
                grid-template-columns: 1fr;
                gap: 40px
            }
            .phone {
                width: 100%;
                max-width: 300px;
                margin: 0 auto
            }
            .storebtns {
                flex-wrap: wrap;
                justify-content: center
            }
            .panelcard {
                padding: 44px 28px
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

    <!-- hero -->
    <header class="shero">
        <div class="ghost100">100</div>
        <div class="inner" id="heroInner">
            <div class="eyebrow rv">Download the Free App</div>
            <h1>
                <span class="wline"><span style="transition-delay:.3s">The journey, <em class="grad" style="font-style:normal">in your pocket.</em></span></span>
            </h1>
            <p class="ssub rv" style="--d:.45s">Four apps, one for each nation, free on both stores.</p>
            <div class="storebtns rv" style="--d:.55s">
                <span>&#63743; App Store</span>
                <span>&#9654; Google Play</span>
            </div>
        </div>
    </header>

    <!-- the four phones -->
    <section class="phones">
        <div class="wrap">
            <div class="prail">

                <div class="phone rv" style="--tint-rgb:255,107,128">
                    <a aria-label='Open the Wales prototype' class='pframe' href='/app-wales'>
          <span class="notch"></span>
          <span class="pscreen"><img src="thumbs/app-wales.jpg" alt="The Wales app home screen" loading="lazy"></span>
        </a>
                    <div class="pmeta">
                        <b class="chip" style="background:linear-gradient(135deg,#FF6B80,#C31A35)"></b>
                        <div>
                            <h3>Wales</h3>
                            <a class='popen' href='/app-wales'>OPEN THE PROTOTYPE &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="phone rv" style="--tint-rgb:147,183,212;--d:.08s">
                    <a aria-label='Open the England prototype' class='pframe' href='/app-england'>
          <span class="notch"></span>
          <span class="pscreen"><img src="thumbs/app-england.jpg" alt="The England app home screen" loading="lazy"></span>
        </a>
                    <div class="pmeta">
                        <b class="chip" style="background:linear-gradient(135deg,#93B7D4,#00356B)"></b>
                        <div>
                            <h3>England</h3>
                            <a class='popen' href='/app-england'>OPEN THE PROTOTYPE &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="phone rv" style="--tint-rgb:47,191,110;--d:.16s">
                    <a aria-label='Open the Ireland prototype' class='pframe' href='/app-ireland'>
          <span class="notch"></span>
          <span class="pscreen"><img src="thumbs/app-ireland.jpg" alt="The Ireland app home screen" loading="lazy"></span>
        </a>
                    <div class="pmeta">
                        <b class="chip" style="background:linear-gradient(135deg,#2FBF6E,#00843D)"></b>
                        <div>
                            <h3>Ireland</h3>
                            <a class='popen' href='/app-ireland'>OPEN THE PROTOTYPE &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="phone rv" style="--tint-rgb:77,178,255;--d:.24s">
                    <a aria-label='Open the Scotland prototype' class='pframe' href='/app-scotland'>
          <span class="notch"></span>
          <span class="pscreen"><img src="thumbs/app-scotland.jpg" alt="The Scotland app home screen" loading="lazy"></span>
        </a>
                    <div class="pmeta">
                        <b class="chip" style="background:linear-gradient(135deg,#4DB2FF,#007FFF)"></b>
                        <div>
                            <h3>Scotland</h3>
                            <a class='popen' href='/app-scotland'>OPEN THE PROTOTYPE &rarr;</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- what the app does -->
    <section class="features">
        <div class="wrap">
            <div class="shead rv">
                <h2>Built for the day out</h2>
                <span class="rule"></span>
                <span class="cap">THE SAME GUIDE, LIVE IN HAND</span>
            </div>
            <div class="fgrid">
                <div class="fcard rv">
                    <div class="fico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg></div>
                    <h3>The whole nation in hand.</h3>
                    <p>Every listed attraction, place to stay and place to eat for the country you are travelling.</p>
                </div>
                <div class="fcard rv" style="--d:.08s">
                    <div class="fico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="M15.8 15.8 21 21"/></svg></div>
                    <h3>Search that understands places.</h3>
                    <p>Name, town, county or postcode, filtered to what you feel like doing.</p>
                </div>
                <div class="fcard rv" style="--d:.16s">
                    <div class="fico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.7 8.3-2.2 5.2-5.2 2.2 2.2-5.2z"/></svg></div>
                    <h3>A map that gets you there.</h3>
                    <p>Every place pinned, with directions from wherever you are standing.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- one family -->
    <section class="family">
        <div class="wrap">
            <div class="panelcard appp rv">
                <div class="appdots"></div>
                <h3>Built as one family.</h3>
                <p>The four apps share one design and one source of truth. A place updated once is updated everywhere, on the website and in the right nation&rsquo;s pocket.</p>
                <div class="storebtns">
                    <a href='/cinematic-concept'>SEE THE WEBSITE CONCEPT</a>
                    <a href='/about'>HOW THE GUIDE WORKS</a>
                </div>
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