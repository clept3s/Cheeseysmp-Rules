(() => {
    if (customElements.get("cheesesmp-footer")) return;

    class CheeseSMPFooter extends HTMLElement {
        connectedCallback() {
            if (this.shadowRoot) return;

            const root = this.attachShadow({ mode: "open" });
            root.innerHTML = `
                <style>
                    :host {
                        --cs-bg: #171116;
                        --cs-surface: #241820;
                        --cs-surface-raised: #33212A;
                        --cs-border: #59404A;
                        --cs-text: #FFF4D8;
                        --cs-text-muted: #D1BFA5;
                        --cs-cheddar: #F2AD38;
                        --cs-cheddar-hover: #FFC65B;
                        --cs-cheese: #FFD166;
                        --cs-cheese-hover: #FFDF8C;
                        --cs-plum: #542B3A;
                        --cs-plum-hover: #71374A;
                        --cs-danger: #FF8F86;
                        --cs-success: #A8D992;
                        display: block;
                        color-scheme: dark;
                    }

                    *, *::before, *::after { box-sizing: border-box; }

                    .footer {
                        width: 100%;
                        padding: 34px 24px 22px;
                        border-top: 1px solid var(--cs-border);
                        background:
                            radial-gradient(ellipse at 50% 0, rgba(255, 209, 102, .09), transparent 32rem),
                            var(--cs-bg);
                        color: var(--cs-text);
                        font: 14px/1.5 "DM Sans", Arial, sans-serif;
                    }

                    .inner { width: min(100%, 1040px); margin: 0 auto; }
                    .top { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-bottom: 25px; }
                    .name { margin: 0; color: var(--cs-cheese); font-size: 20px; font-weight: 800; letter-spacing: -.04em; }
                    .tagline { margin: 5px 0 0; color: var(--cs-text-muted); font-size: 13px; }
                    nav { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px 22px; }
                    nav a { min-height: 44px; display: inline-flex; align-items: center; color: var(--cs-cheese); font-size: 13px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; transition: color .15s ease; }
                    nav a:hover { color: var(--cs-cheese-hover); }
                    nav a:focus-visible { outline: 2px solid var(--cs-cheddar); outline-offset: 3px; border-radius: 2px; }
                    .bottom { display: grid; grid-template-columns: minmax(180px, auto) minmax(0, 1fr); align-items: start; gap: 8px 24px; padding-top: 17px; border-top: 1px solid var(--cs-border); }
                    .copyright { margin: 0; color: var(--cs-text-muted); font-size: 12px; }
                    .disclaimer { max-width: 720px; margin: 0; color: var(--cs-text-muted); font-size: 11px; line-height: 1.6; }

                    @media (max-width: 620px) {
                        .footer { padding: 27px 18px 19px; }
                        .top { align-items: flex-start; flex-direction: column; gap: 18px; padding-bottom: 20px; }
                        nav { justify-content: flex-start; gap: 4px 20px; }
                        .bottom { grid-template-columns: 1fr; gap: 9px; }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        nav a { transition: none; }
                    }
                </style>
                <footer class="footer" aria-label="CheeseySMP website footer">
                    <div class="inner">
                        <div class="top">
                            <div>
                                <p class="name">CheeseySMP</p>
                                <p class="tagline">Your Minecraft survival adventure starts here.</p>
                            </div>
                            <nav aria-label="CheeseySMP official websites">
                                <a href="https://cheeseysmp.net" target="_blank" rel="noopener noreferrer">Home</a>
                                <a href="https://store.cheeseysmp.net" target="_blank" rel="noopener noreferrer">Store</a>
                                <a href="https://rules.cheeseysmp.net" target="_blank" rel="noopener noreferrer">Rules</a>
                                <a href="https://discord.gg/cheeseysmp" target="_blank" rel="noopener noreferrer">Discord</a>
                            </nav>
                        </div>
                        <div class="bottom">
                            <p class="copyright">© <span class="year"></span> CheeseySMP. All rights reserved.</p>
                            <p class="disclaimer">CheeseySMP is an independent Minecraft server and is not affiliated with, endorsed by, or officially associated with Mojang Studios or Microsoft. Minecraft is a trademark of Mojang Studios.</p>
                        </div>
                    </div>
                </footer>`;

            root.querySelector(".year").textContent = String(new Date().getFullYear());
        }
    }

    customElements.define("cheesesmp-footer", CheeseSMPFooter);
})();