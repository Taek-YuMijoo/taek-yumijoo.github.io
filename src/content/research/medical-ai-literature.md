---
title: "Mapping Medical AI Research, 2010–2024"
type: "Computational text analysis"
role: "Research Assistant"
date: 2024-10-01
dateLabel: "May – Oct 2024"
venue: "KAIST / KISDI"
location: "Daejeon"
links:
  - label: "KISDI report (Kim et al., 2024)"
    url: "https://library.kisdi.re.kr/$/10230/contents/3934580"
cover: ./medical-ai-literature/cover.jpg
coverCaption: "Figure from the KISDI report chapter (2024): medical AI papers per publication year, 2010–2024."
summary: "Topic modeling and temporal analysis of 31,804 English-language medical AI papers (2010–2024) from OpenAlex, showing a move from disease-specific studies toward imaging and IoT applications."
featured: true
---

This study is part of chapter 4, "Medical AI in South Korea and the Expansion of Medical Labor," in a KISDI policy report on how AI is changing work. The chapter first reviews Korean government reports and programs on medical AI. It finds that public interest began around 2015 and grew sharply after generative AI spread in 2022, and that the state acts mainly as a builder of a supportive industry ecosystem rather than as a developer of medical AI itself. It then asks, from the research side, how medical AI knowledge is being produced.

The data come from OpenAlex. The team collected 42,950 papers published between 2010 and 2024 under the keyword "AI." After keeping English-language records that had all the selected metadata fields, and removing duplicates and corrupted abstracts, 31,804 papers remained. The abstracts were tokenized with a scientific-vocabulary BERT tokenizer plus a custom dictionary of new terms. The analysis combined descriptive statistics, TF-IDF word frequencies by year, a structural topic model with 12 topics, and a comparison of topic shares across three periods (2010–2014, 2015–2019, 2020–2024).

Output grew from 406 papers in 2010 to 2,504 in 2020 and 8,654 in 2023, with 4,048 in 2024. The report attributes much of the rise to COVID-19 and to ChatGPT.

![Top 15 TF-IDF words for each year, 2010–2024](./medical-ai-literature/fig-1.jpg)

In the early 2010s the frequent words name patients and conditions ("women," "children," "hiv," "treatment"). Around 2020 "covid_19" and "diagnosis" lead, and in 2023–2024 "chatgpt" appears among the top terms.

![Table of the 12 topics found by the topic model, with short descriptions](./medical-ai-literature/fig-2.jpg)

The 12 topics include medical imaging with deep learning (topic 7), IoT and network security in health settings (topic 3), cell and molecular biology (topic 4), and pediatric sleep disorders and child health (topic 10).

![Share of each of the 12 topics in the full corpus](./medical-ai-literature/fig-3.jpg)

Across the three periods, topics 3 and 7 grew quickly while topics 4 and 10 shrank. Among the topics plotted, imaging (topic 7) went from 1.8% in 2010–2014 to 7.0% and then 24.2%, and IoT and security (topic 3) went from 5.4% to 14.8% and then 18.9%. Cell and molecular biology (topic 4) fell from 25.0% to 16.0% and then 4.5%, and pediatric sleep and child health (topic 10) from 24.0% to 18.1% and then 5.7%. The report reads this as a move away from technical studies of specific cases or experimental models, and toward applied research that brings computational methods into medical practice.

![Topic shares by period: 2010–2014, 2015–2019 and 2020–2024](./medical-ai-literature/fig-4.jpg)

I carried out the computational text and temporal analysis for the chapter as a research assistant in the Computational Analysis of Technology and Society Lab at KAIST, supervised by Prof. Lanu Kim. The topic trends give the policy discussion of medical AI and medical labor an empirical reference point: the research literature is moving from disease-specific studies toward systems that are used in clinical settings.

## Source

김란우, 전준, 김태균, 한묘경, 박두진, 임영택, & 정광혁 [Kim, L., Jeon, J., Kim, T., Han, M., Park, D., Lim, Y., & Jung, K.]. (2024). Chapter 4: 대한민국 의료 AI와 의료노동의 확장 [Medical AI in South Korea and the expansion of medical labor]. In *인공지능의 진전과 미래 일의 의미 변화에 따른 대응 방안* [Advances in artificial intelligence and the changing meaning of work in the future] (Digital Transformation Megatrends Research IV, pp. 1–184). Korea Information Society Development Institute (KISDI). https://library.kisdi.re.kr/$/10230/contents/3934580
