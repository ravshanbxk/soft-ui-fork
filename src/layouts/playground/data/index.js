const questions = [
    'What is the legal status of your organisation?',
    'What is the name of application being provided?',
    'Please state the access methods to your application?',
    'How long do you store user data for?',
    'Is there an escalation matrix for any security features?',
    'Please state your policies on customer facing application security',
    'What is your software delivery method?',
    'Please state your revenue for the last year'
];

var answers = [
    `Lense.AI is a privately held corporation registered in the state of Delaware.`,
    `The name of our application is LenseAI.`,
    `Users can access LenseAI via a web browser or through our dedicated mobile applications available on iOS and Android platforms. Additionally, we provide API access for enterprise-level integrations.`,
    `Lense.AI retains user data for a period of 24 months following the termination of a user's account, in compliance with regulatory requirements and to support potential customer inquiries.`,
    'Yes, we have an established escalation matrix. Security incidents are escalated through a tiered response structure, starting from our in-house security team to our executive leadership, based on the severity and impact of the incident.',
    `Lense.AI is committed to ensuring the security and privacy of our customer data. We follow industry best practices and standards such as ISO 27001 and SOC 2 for securing our application. Additionally, we undergo regular third-party security assessments and penetration testing to identify and mitigate potential vulnerabilities.`,
    `Our software is delivered as a service (SaaS) over the internet, hosted on secure, scalable, and resilient cloud infrastructure. We follow a continuous delivery model, enabling us to rapidly deploy updates and new features to our customers.`,
`Lense.AI generated a revenue of $428 in the ongoing fiscal year.`
];
  
var sources = [
    'ArticleOfOrg.pdf: "...Name of the company is Lense Inc., a Delaware Corporat..."',
    'Relevant sources where this information came from',
    'Relevant sources where this information came from',
    'Relevant sources where this information came from',
    'Relevant sources where this information came from',
    'Relevant sources where this information came from',
    'Relevant sources where this information came from',
    'Relevant sources where this information came from',
];

const dataExport = {
    questions: questions,
    answers: answers,
    sources: sources
};

export default dataExport;