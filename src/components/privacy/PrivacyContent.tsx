"use client";

import React from "react";
import Link from "next/link";

export function PrivacyContent() {
  return (
    <section className="privacy-section">
      <div className="privacy-container">
        <div className="privacy-card rv in">
          <h2>Our Commitment to Your Privacy</h2>
          <p>
            We are committed to protecting your privacy. We will only use the information that we collect about you lawfully (in accordance with the Data Protection Act 1998).
          </p>
          <p>
            We collect information about you for 3 reasons: firstly, to process any online orders/enquiries, secondly to provide news if you are a subscriber and thirdly to provide you with the best possible service.
          </p>
          <p>
            By adding your name to the newsletter subscription form you may receive occasional mail shots regarding special offers and new products that may be of interest to you. You will also be advised when an order was placed. We will give you the chance to refuse any marketing email from us.
          </p>
        </div>

        <div className="privacy-card rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
          <h2>Information We Collect</h2>
          <p>
            The type of information we will collect about you includes:
          </p>
          <ul className="privacy-list">
            <li>Your name</li>
            <li>Order delivery address</li>
            <li>Phone number</li>
            <li>Email address</li>
          </ul>
          <p>
            We will never collect additional information about you without informing you of this beforehand.
          </p>
        </div>

        <div className="privacy-card rv in" style={{ "--d": ".14s" } as React.CSSProperties}>
          <h2>Secure Online Payments</h2>
          <p>
            Online payments are via external secure services and are independent from our website. Please check the payment service&rsquo;s privacy policy and terms for detailed information.
          </p>
        </div>

        <div className="privacy-card rv in" style={{ "--d": ".2s" } as React.CSSProperties}>
          <h2>Data Accuracy, Security &amp; Sharing</h2>
          <p>
            The data we hold will be accurate and up to date. You can check the information that we hold about you by emailing us. If you find any inaccuracies we will delete or correct it promptly.
          </p>
          <p>
            The personal information that we hold will be held securely in accordance with our internal security policy and the law. We will not share your information with any 3rd party, either in the EEA (European Economic Area) or outside this area.
          </p>
        </div>

        <div className="privacy-card rv in" style={{ "--d": ".26s" } as React.CSSProperties}>
          <h2>Cookies &amp; Tracking Technology</h2>
          <p>
            We may use technology to track the patterns of behaviour of visitors to our site or order processing. This can include using a &ldquo;cookie&rdquo; which would be stored on your browser. You can usually modify your browser to prevent this happening, although this may prevent online purchasing from being available to you. The information collected in this way can be used to identify you unless you modify your browser settings.
          </p>
        </div>

        <div className="privacy-card rv in" style={{ "--d": ".32s" } as React.CSSProperties}>
          <h2>Photography, Copyright &amp; Notice</h2>
          <p>
            Every effort has been made to trace the copyright of various photographs used and we would like to apologize for any omissions. All images are supplied to us via the attractions, or subsequent businesses themselves and we take them on their word, that these images belong to them and they give us sole permission to use these images, solely for the purpose of Top 100 Attractions only.
          </p>
          <p>
            The author would be pleased to include appropriate acknowledgement in any subsequent book or here on the website, relevant to that picture&rsquo;s regions. If you believe that an image is yours, if you are able to prove the legitimacy of that claim, if you say that it must be removed, we will gladly remove it from this website.
          </p>
          <p>
            Because of the dynamic nature of the Internet, any web addresses or contact details in the book or on this website may have changed since publication and may not be valid. All telephone numbers, addresses, contact details and opening times were correct at the time of going to print, or going live on the website.
          </p>
        </div>

        <div className="privacy-card rv in" style={{ "--d": ".38s" } as React.CSSProperties}>
          <h2>Contact Us &amp; Top 100 Guide</h2>
          <p>
            If you have any questions or comments about our privacy policy, or wish to review the information we hold, please get in touch with our team.
          </p>
          <div className="privacy-action-bar">
            <Link className="privacy-btn privacy-btn-gold" href="/contact">
              CONTACT US &rarr;
            </Link>
            <Link className="privacy-btn privacy-btn-outline" href="/book">
              TOP 100 ATTRACTIONS BOOK &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

