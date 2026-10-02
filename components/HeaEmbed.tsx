import Script from "next/script";

/** Site-wide HEA World side-panel chat embed (collapsed by default). */
export function HeaEmbed() {
  return (
    <Script
      src="https://hea-world.com/public/hea_chat_engine/hea_embed.js"
      strategy="afterInteractive"
      data-install-id="EZGwsGp_iRfp1wQ6"
      data-widget-url="https://hea-world.com/public/hea_chat_engine/hea_widget.html"
      data-mode="side-panel"
      data-panel-collapsed="true"
    />
  );
}
