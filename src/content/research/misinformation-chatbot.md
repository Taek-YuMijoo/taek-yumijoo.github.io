---
title: "Meta4AI: A Chatbot with Planted Errors for Observing AI Literacy"
type: "Observational study"
role: "Research Assistant"
date: 2025-11-01
dateLabel: "Apr – Nov 2025"
venue: "Korea Press Foundation"
location: "Seoul"
collaborators:
  - "Dr. Soeun Yang (supervisor)"
summary: "Meta4AI, a Claude-based chatbot set to give false references, biased readings and a wrong theory summary, was used to observe how 224 adults check AI answers; about 94% of one task's sample missed the false references."
cover: ./misinformation-chatbot/cover.jpg
coverCaption: "Task screen for the sunscreen task in the observational study, with the two false references the chatbot was set to give when asked for sources (Table 5-1 of the report). The report does not print a screenshot of the chat window itself."
featured: true
---

The Korea Press Foundation report "Gaps in generative AI use and AI literacy" asks how differences in generative AI use relate to AI literacy. Its fifth chapter, the part this entry covers, does not rely on self-reports. It observes what adults do with a chatbot when the chatbot is wrong. Four abilities were assessed: use (can the person solve the task with AI), evaluation (can the person spot the AI's errors and bias), communication (how the person prompts) and collaboration (whether the person works with the AI to develop and improve the result).

The report calls the design an observational survey, not an experiment: every participant did the same three tasks, with no control condition. The chatbot is the stimulus. Self-reported AI literacy can differ from what people do, so the study gave participants a tool that was set to make specific mistakes and recorded whether they noticed. Evaluation ability is scored from those mistakes.

The chatbot, named Meta4AI, was built on the Claude API and ran as a web platform (kpfailit.online). Its system prompt gave it a friendly conversational style, told it to answer in plain text without Markdown so that answers could be pasted into the survey page, and set the randomness (temperature) low so that it followed the prompt closely. The errors were written in advance for each task. In the sunscreen task (nano versus non-nano UV-blocking sunscreen) it answered naturally, but if asked for references it gave two fabricated references and two links. In the Palma ratio task (the report cites a news chart showing Korea's ratio falling from 1.59 to 1.28) it explained the indicator correctly but, for that question, added a biased reading that credited low-income people's return to work. In the column-writing task (a column on adolescent mental health using self-determination theory) it listed the theory's needs as identity formation, physical health and psychological stability, which is wrong, and was set to end each draft with a gender-biased reading that blamed women's labour-market entry.

![Column-writing task as shown to participants, with the error and the bias the chatbot was set to introduce (Table 5-3 of the report).](./misinformation-chatbot/fig-1.jpg)

![System prompt for the sunscreen task: the references and links are supplied only if the user asks for evidence (Table 5-5 of the report).](./misinformation-chatbot/fig-2.jpg)

Participants were drawn from the online panel of a commissioned research firm with quotas by sex (5:5) and age, among adults aged 20 and over who use generative AI. Of 270 who completed the session, 224 had usable chat records (109 men, 115 women; 70 in their twenties, 61 each in their thirties and forties, 26 in their fifties, 6 aged 60 or over). Each task was analysed on the participants who submitted it: 210 for the sunscreen task, 200 for the Palma ratio task and 210 for the column task. The group comparisons use the 188 participants with valid data on all three tasks, and the report warns that these subgroups are small and not representative. After each task participants answered a short recall question about what they had written and which other sources they had used. At the end they received a correction note and were asked whether they had noticed the error or bias.

![Study flow as described in the report (drawn for this page).](./misinformation-chatbot/flow.svg)

Use and evaluation were scored from the submitted answers. Use was 1 if the answer the task required was submitted. Evaluation was 1 only if the final answer contained none of the planted errors or bias and the participant later said they had noticed them, so that lucky avoidance was not counted. The column task could score up to 2. Communication and collaboration were scored by coders, using a rubric built on prompt-writing guidance from major AI providers and the CLEAR framework, on the chat logs. Communication had four sub-items scored 0 or 1: concise wording, clear request, step-by-step questions and refining the answer through follow-up.

Use was near ceiling and evaluation was low. In the sunscreen task, 94.8% scored 1 on use, while 94.3% scored 0 on evaluation (5.7% scored 1). In the Palma ratio task, 96.0% scored 1 on use and 90.0% scored 0 on evaluation (10.0% scored 1). In the column task, 97.1% scored 1 on use; 85.2% scored 0 on evaluation, 12.9% scored 1 and 1.9% scored 2. Within that task, 10.0% corrected the gender-biased reading and 6.7% caught the wrong theory summary. Communication clustered at the middle: in the sunscreen task 57.1% scored 2 of 4, and only 5.2% refined answers through precise follow-up questions. The report concludes that participants had the functional abilities (use, communication) but lacked the higher-level ones (evaluation, collaboration). In the report's check, self-reported AI literacy was only weakly related to observed ability, and only on the use dimension.

![Use and evaluation scores, sunscreen task (Figure 5-1 of the report). Evaluation was 0 for 94.3%.](./misinformation-chatbot/fig-3.jpg)

![Use and evaluation scores, Palma ratio task (Figure 5-6 of the report).](./misinformation-chatbot/fig-4.jpg)

![Use and evaluation scores, column-writing task (Figure 5-11 of the report).](./misinformation-chatbot/fig-5.jpg)

I built the chatbot and its task-specific system prompts, ran the deployment to the panel participants, and managed the resulting data. The report itself does not list individual contributors, so this description of my role comes from my own account. The study was supervised by Dr. Soeun Yang. I read the chapter for the design and for the figures quoted here; the group comparisons in its later pages are not summarised.

## Source

Yang, S., Choi, S., & Kim, B. (2025). *Gaps in generative AI use and AI literacy* (Chapter 5, Observational survey of AI literacy, pp. 128–180). Korea Press Foundation. In Korean.
