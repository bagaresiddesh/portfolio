// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical () {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title='Technical'
          preTitle='My Stack'
          subTitle='A well-balanced mix of modern frameworks, languages, and platforms'
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <BadgesBlock
              title='Tools & Platforms'
              copy='The IDEs, collaboration tools, and platforms I rely on daily to design, develop, and ship efficiently.'
              list={software}
              block='software'
              fullContainer='fullContainer'
              icon='toolbox'
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title='Languages, Frameworks & Databases'
              copy='From crafting responsive interfaces to building scalable server-side logic - the core technologies I use to bring ideas to life.'
              list={tech}
              block='tech'
              fullContainer='fullContainer'
              icon='laptop-code'
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title='AWS Cloud Services'
              copy='Hands-on experience architecting and deploying serverless, event-driven, and scalable cloud solutions on AWS.'
              list={aws}
              block='tech'
              fullContainer='fullContainer'
              icon='cloud'
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title='AI, Integrations & Certifications'
              copy='Exploring the AI landscape with RAG pipelines, LLM agents, and third-party integrations - backed by industry certifications.'
              list={aiAndIntegrations}
              block='tech'
              fullContainer='fullContainer'
              icon='robot'
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src='/img/dataism-24.svg'
              width={477}
              height={1111}
              alt='Data Strings graphical representation'
            />
          </div>
        </section>
      </Container>
    </Section>
  )
}

const software = [
  { key: 'vscode', name: 'VS Code', type: 'devicon' },
  { key: 'cursor', name: 'Cursor IDE', type: 'si' },
  { key: 'postman', name: 'Postman', type: 'devicon' },
  { key: 'swagger', name: 'Swagger', type: 'devicon' },
  { key: 'figma', name: 'Figma', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'github', name: 'GitHub', type: 'devicon' },
  { key: 'gitlab', name: 'GitLab', type: 'devicon' },
  { key: 'bitbucket', name: 'Bitbucket', type: 'devicon' },
  { key: 'jira', name: 'Jira', type: 'devicon' },
  { key: 'confluence', name: 'Confluence', type: 'devicon' },
  { key: 'slack', name: 'Slack', type: 'devicon' },
  { key: 'docker', name: 'Docker', type: 'devicon' },
  { key: 'dbeaver', name: 'DBeaver', type: 'devicon' },
  { key: 'vercel', name: 'Vercel', type: 'devicon' }
]

const tech = [
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'Next.js', type: 'devicon' },
  { key: 'nodejs', name: 'Node.js', type: 'devicon' },
  { key: 'typescript', name: 'TypeScript', type: 'devicon' },
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'sass', name: 'SASS', type: 'devicon' },
  { key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
  { key: 'antdesign', name: 'Ant Design', type: 'devicon' },
  { key: 'materialui', name: 'Material UI', type: 'devicon' },
  { key: 'sequelize', name: 'Sequelize', type: 'devicon' },
  { key: 'axios', name: 'Axios', type: 'devicon' },
  { key: 'postgresql', name: 'PostgreSQL', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'dynamodb', name: 'DynamoDB', type: 'devicon' },
  { key: 'csharp', name: 'C#', type: 'devicon' },
  { key: 'dot-net', name: '.NET', type: 'devicon' },
  { key: 'python', name: 'Python', type: 'devicon' },
  { key: 'json', name: 'JSON', type: 'devicon' }
]

const aws = [
  { key: 'aws-s3', name: 'AWS S3', type: 'logos' },
  { key: 'aws-lambda', name: 'AWS Lambda', type: 'logos' },
  { key: 'aws-cognito', name: 'AWS Cognito', type: 'logos' },
  { key: 'aws-cloudwatch', name: 'CloudWatch', type: 'logos' },
  { key: 'aws-iam', name: 'IAM', type: 'logos' },
  { key: 'aws-secrets-manager', name: 'Secrets Manager', type: 'logos' },
  { key: 'aws-eventbridge', name: 'EventBridge', type: 'logos' },
  { key: 'aws-cloudfront', name: 'CloudFront', type: 'logos' },
  { key: 'aws-codecommit', name: 'CodeCommit', type: 'logos' },
  { key: 'serverless', name: 'AWS Serverless', type: 'logos' },
  { key: 'aws-amplify', name: 'AWS Amplify', type: 'logos' },
  { key: 'aws-sqs', name: 'AWS SQS', type: 'logos' },
  { key: 'aws-ses', name: 'AWS SES', type: 'logos' },
  { key: 'aws-step-functions', name: 'Step Functions', type: 'logos' },
  { key: 'aws-cloudformation', name: 'CloudFormation', type: 'logos' },
  { key: 'aws-rds', name: 'AWS RDS', type: 'logos' }
]

const aiAndIntegrations = [
  { key: 'langchain', name: 'LangChain', type: 'si' },
  { key: 'streamlit', name: 'Streamlit', type: 'si' },
  { key: 'openai-icon', name: 'OpenAI', type: 'logos' },
  { key: 'claudecode', name: 'Claude Code', type: 'si' },
  { key: 'githubcopilot', name: 'GitHub Copilot', type: 'si' },
  { key: 'stability-ai-icon', name: 'Stability AI', type: 'logos' },
  { key: 'amazonalexa', name: 'Alexa Skill Kit', type: 'si' },
  { key: 'stripe', name: 'Stripe API', type: 'si' },
  { key: 'zapier', name: 'Zapier', type: 'si' },
  { key: 'recaptcha', name: 'reCAPTCHA', type: 'logos' },
  { key: 'zoho', name: 'Zoho Campaigns', type: 'si' },
  { key: 'microsoft-azure', name: 'AZ-900 Azure', type: 'logos' }
]
