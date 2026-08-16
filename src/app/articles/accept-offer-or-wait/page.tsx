import type { Metadata } from "next";
import ArticleShell from "@/components/article-shell";

export const metadata: Metadata = {
  title: "Accept the Offer or Wait? A Decision Guide for NSW Parents",
  description:
    "Should you accept a school offer or hold out for a reserve list place? A clear decision framework covering every scenario — offer only, reserve only, or both at once.",
  keywords: [
    "accept offer or wait reserve list",
    "should I accept OC offer",
    "should I accept selective offer",
    "decline offer reserve list NSW",
    "OC selective offer decision",
    "NSW placement offer guide",
  ],
};

export default function AcceptOrWaitArticle() {
  return (
    <ArticleShell
      category="Articles · Decision Guide"
      title="Accept the Offer or Wait? A Decision Guide for NSW Parents"
      subtitle="Every family faces the same question at outcomes time: accept what we have, or hold out for something better? This framework walks through every scenario so you can decide with confidence."
      date="August 2026"
      readTime="5 min read"
      sections={[
        {
          heading: "The answer is almost always: accept",
          paragraphs: [
            "The single most important fact about NSW OC and Selective placement is that accepting an offer never hurts you. It does not remove your child from any reserve list, it does not lock you out of anything, and it is reversible — if a better offer arrives later, you can switch.",
            "The reverse is not true. Declining every offer removes your child from the entire placement system. They cannot be considered for later rounds, and any reserve list position is void. The asymmetry is stark: accepting is risk-free, declining is not.",
          ],
        },
        {
          heading: "Scenario 1: You have an offer and nothing else",
          paragraphs: [
            "Accept it. There is no decision to make. You have a firm place at a school you ranked — celebrate and move on to enrolment.",
          ],
        },
        {
          heading: "Scenario 2: You have a reserve band and no offer",
          paragraphs: [
            "There is nothing to accept, so nothing to decide. Your only real task is to make sure your child has a confirmed fallback — their local school — enrolled and normal. Then wait, check the list periodically, and let any reserve offer be a bonus rather than the plan.",
          ],
        },
        {
          heading: "Scenario 3: Both — an offer AND a reserve band at a higher choice",
          paragraphs: [
            "This is the scenario where parents agonise, and it is the one where the answer is cleanest: accept the offer you have, immediately, and stay on the higher-choice reserve list. This is not 'settling' — it is the optimal play, because it guarantees your child a place while preserving the chance of moving up.",
            "Concretely: accept the offer by the deadline, confirm enrolment, and keep an eye on the higher-choice school's reserve list. If that school makes an offer, you accept it and your original place is released automatically. Nothing is lost, and a better outcome remains possible.",
          ],
        },
        {
          heading: "The only reason to decline is genuine disinterest",
          paragraphs: [
            "There is exactly one legitimate reason to decline an offer: you have decided, on reflection, that your child would be better off at their local school or an independent school regardless of any OC or Selective outcome. In that case, declining is simply honest — you are not losing anything you wanted.",
            "What you should never do is decline an offer as a 'gamble' to force a higher-choice outcome. The system does not work that way. Your choices are locked, your reserve position is fixed, and declining an offer changes none of it — it only removes a guaranteed place.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Will accepting an offer make me miss out on a higher choice?",
          a: "No. Accepting an offer does not affect your reserve list position at any other school. If a higher-choice school later makes an offer, you accept it and the original place is released. You lose nothing by accepting.",
        },
        {
          q: "Can I change my mind after accepting?",
          a: "You can switch to a higher-choice offer if one arrives from a reserve list. You cannot, however, re-order your original school choices or ask to be reconsidered for a school you declined after outcomes are released.",
        },
        {
          q: "What is the deadline for accepting an offer?",
          a: "The outcome letter specifies the response deadline — typically a couple of weeks after outcomes are released. Missing it is treated as declining, so do not leave it to the last day. The NSW Department of Education publishes exact dates each year.",
        },
      ]}
      cta={{
        text: "Not sure what your band means?",
        href: "/offer-guide",
        label: "Read the full offer strategy guide",
      }}
    />
  );
}
