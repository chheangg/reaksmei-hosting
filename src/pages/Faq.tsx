import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Text } from "@chakra-ui/react"
import { Qna } from "../types";

const qnas: Qna[] = [
  {
    id: 0,
    question: "Are my orders refundable?",
    answer: "Your orders are refundable for up to a week! But the reason provided must be reasonable (Ex. Unsatisfactory services, a lot of downtimes, etc)"
  },
  {
    id: 1,
    question: "How are storage usage unlimited?",
    answer: "All plans will initially have a limited storage to begin with, and we will provide more and more to fit your usage if asked. The reason provided must be for fair use and reasonable. We reserve the right to suspend or delete files or servers in the case it is misused"
  },
  {
    id: 3,
    question: "Will you provide backup?",
    answer: "We do for some plans, however for others, in the case of outtage, crashes, or a system being compromised. We cannot guarantee the integrity of your data. Whilst we take backup of all data in our RAID 1 offsite, we also encourage you to do the same as we hold no responsibility for backup-less plan"
  },
  {
    id: 4,
    question: "Help, I have a problem! where do I start?",
    answer: "Please check the contact page for our email, or phone number for faster responses."
  },
  {
    id: 5,
    question: "Is co-location available at the moment?",
    answer: "It is not available yet, but will be in the future. Meanwhile, check out our facebook and instagram page in the Contact page for updates."
  }
]

const Faq = () => (
  <Box minH='80vh' py='12vh' px='10vw'>
    <Heading fontSize={{ base: '2.5rem', lg: '48' }}>Commonly Asked Questions</Heading>
    <Accordion mt='2rem' allowMultiple>
      {
        qnas.map(qna => 
          <AccordionItem key={qna.id}>
            <AccordionButton>
              <Text fontWeight='semibold'>{qna.question}</Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {qna.answer}
            </AccordionPanel>
          </AccordionItem>  
        )
      }
    </Accordion>
  </Box>
)

export default Faq;