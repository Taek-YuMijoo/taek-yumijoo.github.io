---
title: "AI Skill Demand in Korean Online Job Postings"
type: "Research project"
role: "Research Assistant"
date: 2024-10-01
dateLabel: "Jul – Oct 2024"
venue: "Korea Information Society Development Institute (KISDI)"
collaborators:
  - "Dr. Hyunkyung Lee (supervisor)"
  - "Prof. Byungjun Kim (supervisor)"
summary: "Structural topic modeling of 1,774 Korean AI job listings (Aug 2024) shows which AI skills employers ask for and how degree, experience and major shift demand."
cover: ./ai-skill-demand/cover.jpg
coverCaption: "Research plan: linking industry demand (online job postings), education supply (course syllabi) and expert interviews into an AI skill strategy for Korea. Slide from Hyunkyung Lee's presentation."
---

Official statistics are slow to capture the labor demand created by AI. This KISDI project, "AI Skill Demand Analysis Using a Skill Value Chain Framework," builds on a 2023 study that applied a skill value chain to AI. The chain links skill demand from industry, skill training in higher education, and expert views about future needs. The question for this part was which skills Korean employers ask for in AI-related roles, and whether Korean postings show a different pattern from the overseas studies the team reviewed.

The data came in two rounds. In July 2024 the team collected 373 AI-related postings directly from company and start-up websites (335 STEM-track, 38 non-STEM). Of these, 134 appeared on none of the three major job platforms (Saramin, JobKorea, AI Career), which led the team to treat text from any single platform as an incomplete picture of AI hiring; AI Career was chosen because it carries a high share of AI postings. In August 2024 a second round crawled 1,472 postings from the AI-specialized site aicareer.co.kr. Splitting postings that listed several positions and removing unrelated ones left 1,774 position-level records. After merging with the first round and removing duplicates, the slides report 1,988 postings in the final data. The breakdowns below use the 1,774 records.

![Second-round data pipeline: crawling aicareer.co.kr in August 2024, cleaning, preprocessing with bigrams, and topic modeling on terms appearing in at least 50 documents.](./ai-skill-demand/fig-1.jpg)

Posting text was tokenized, stop words were removed, and frequent word pairs were merged into bigrams. The team ran word-frequency analysis (TF-IDF) by job title and structural topic modeling (STM), with degree requirement, experience requirement and STEM versus non-STEM major as covariates. The number of topics was set to 11 using semantic coherence and exclusivity, and GPT was used to name them. The topics were then matched to the eight AI skill clusters in the Lightcast taxonomy used in Stanford HAI's AI Index; nine of the eleven could be matched.

![Collected data: field completeness and breakdown by degree, experience and major (n=1,774). 36% of postings required no degree, 48% asked for a bachelor's degree, 48% asked for no experience, and 57% were STEM-track.](./ai-skill-demand/fig-2.jpg)

The most common job titles were machine learning engineer (269 records, 15.2%), data analyst (201, 11.3%) and data engineer (146, 8.2%). Seoul accounted for 72% of postings with a listed region (1,276 of 1,768). The largest topics were data engineering and cloud infrastructure (13.3% of text), generative AI and natural language processing (10.8%), and projects and problem solving using AI (10.5%). Weighted by topic share, machine learning had the highest skill-cluster importance (631.03), followed by artificial intelligence (326.07) and neural networks (162.03). Autonomous driving appeared in some postings but not often enough to form a topic.

![Eleven topics by share of text (%), with the Lightcast skill cluster each topic was matched to.](./ai-skill-demand/fig-3.jpg)

The covariates separated the topics. Machine learning and deep learning, AI-based problem solving, data analysis and cloud infrastructure topics were prevalent in postings with no degree requirement, while deep learning computer vision, logistics and control systems, generative AI and prediction modeling were tied to higher-degree postings. Generative AI and cloud infrastructure topics were more common in entry-level and junior postings. STEM majors raised the share of those two topics and lowered the share of general hiring and administrative text. The presentation reads this as employers weighing hands-on ability and recent technical skills more than degree level in the largest topics.

![STM results: how degree, experience and STEM major relate to topic prevalence.](./ai-skill-demand/fig-4.jpg)

![Importance of AI skill clusters across all postings, computed from topic shares weighted by the clusters each topic was matched to.](./ai-skill-demand/fig-5.jpg)

My role as research assistant, from July to October 2024, was to collect the job postings and run the structural topic modeling and word-frequency analysis. The presentation lists me as part of the research team. Dr. Hyunkyung Lee and Prof. Byungjun Kim supervised the project.

Dr. Lee presented the project as Presentation 3 in the session "Social Challenges for Labor-Friendly AI" at the 2024 Research Symposium on ICT-Based Solutions to Social Issues, organized under the Ministry of Science and ICT. The presentation also covered a survey of AI course syllabi at universities and the K-MOOC platform, and domestic cases of new AI education models. Those parts are not summarized here.

## Source

Lee, Hyunkyung. 2024. "숙련가치사슬 기반 AI Skill 수요 분석: 국내 인공지능 온라인 구인 공고 분석을 중심으로" (AI skill demand analysis based on the skill value chain: focusing on online job postings for AI in Korea). Presentation 3, in *노동친화적 인공지능의 가치와 사회적 과제* (Values and Social Challenges of Labor-Friendly AI), 2024 ICT기반 사회현안 해결방안 연구 심포지엄 (2024 Research Symposium on ICT-Based Solutions to Social Issues), Korea Information Society Development Institute, pp. 72–93. Figures are slides from this presentation.
