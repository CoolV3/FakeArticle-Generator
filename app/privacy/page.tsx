// The privacy policy is ai, because I dont have time to write a privacy policy


export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-12">
            <main className="mx-auto max-w-4xl">
                <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 shadow-xl md:p-12">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Privacy Policy
                    </h1>

                    <p className="mb-8 text-sm text-neutral-400">
                        Last updated: June 15, 2026
                    </p>

                    <p className="mb-6 leading-7 text-neutral-300">
                        This Privacy Policy explains how this application collects, uses,
                        stores, and deletes data when users create and publish articles.
                    </p>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            1. Data We Collect
                        </h2>

                        <p className="mb-4 leading-7 text-neutral-300">
                            When you create an article, the following information may be
                            stored in our database:
                        </p>

                        <ul className="list-disc space-y-2 pl-6 text-neutral-300">
                            <li>The article title</li>
                            <li>The author name entered by the user</li>
                            <li>The article content</li>
                            <li>The article image URL</li>
                            <li>The IP address of the creator</li>
                            <li>The creation date and time</li>
                            <li>The scheduled deletion time</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            2. Why We Store This Data
                        </h2>

                        <p className="leading-7 text-neutral-300">
                            We store this data to publish user-created articles, prevent
                            spam, limit abuse, enforce article creation limits, and keep the
                            application secure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            3. Storage Duration
                        </h2>

                        <p className="leading-7 text-neutral-300">
                            Articles are stored for a maximum of{" "}
                            <strong className="text-white">3 days</strong>. After this
                            period, articles are intended to be deleted from our database.
                            The IP address connected to the article is also intended to be
                            deleted together with the article.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            4. IP Address
                        </h2>

                        <p className="leading-7 text-neutral-300">
                            We store the creator&apos;s IP address to prevent spam, abuse,
                            and excessive article creation. The IP address is not displayed
                            publicly.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            5. Publicly Visible Content
                        </h2>

                        <p className="mb-4 leading-7 text-neutral-300">
                            Published articles may be publicly visible. Public article data
                            may include:
                        </p>

                        <ul className="list-disc space-y-2 pl-6 text-neutral-300">
                            <li>The article title</li>
                            <li>The author name entered by the user</li>
                            <li>The article content</li>
                            <li>The article image</li>
                        </ul>

                        <p className="mt-4 leading-7 text-neutral-300">
                            The creator&apos;s IP address is not shown publicly.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            6. External Image URLs
                        </h2>

                        <p className="leading-7 text-neutral-300">
                            Users can provide image URLs for articles. If an external image
                            URL is used, the image may be loaded from a third-party server.
                            That third party may receive technical information such as the
                            visitor&apos;s IP address or browser information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            7. Data Sharing
                        </h2>

                        <p className="leading-7 text-neutral-300">
                            We do not sell personal data. Data is not shared with third
                            parties unless required by law, necessary to protect the
                            application, or necessary to investigate misuse.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            8. User Rights
                        </h2>

                        <p className="leading-7 text-neutral-300">
                            Depending on applicable privacy laws, users may have the right to
                            request information about stored data, request deletion, request
                            correction, or object to certain processing.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-2xl font-semibold">
                            9. Security
                        </h2>

                        <p className="leading-7 text-neutral-300">
                            We use reasonable technical measures to protect stored data.
                            However, no online service can be guaranteed to be completely
                            secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-2xl font-semibold">
                            10. Contact
                        </h2>

                        <p className="leading-7 text-neutral-300">
                            If you have questions about this Privacy Policy or want to
                            request deletion of an article before the automatic deletion
                            period, please contact the operator of this website.
                        </p>
                    </section>

                    <div className="mt-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-sm text-yellow-100">
                        <p>
                            <strong>Note:</strong> This Privacy Policy is a basic template
                            and does not replace legal advice. If this app is public,
                            especially in the EU/Germany, you should make sure the policy
                            matches your actual hosting, database, logging, and contact
                            details.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
``