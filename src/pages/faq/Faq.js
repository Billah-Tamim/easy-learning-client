import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';



function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }




const Faq = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-center'>Frequently Ask Questions & Answer</h3>
            <Accordion className='m-5' defaultActiveKey="0">
                <Card>
                    <Card.Header className='d-flex align-items-center justify-content-between px-5'>
                        <span>Which way you take class on online?</span>
                        <CustomToggle eventKey="0">See the answer</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse className='px-5' eventKey="0">
                        <Card.Body>TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className='d-flex align-items-center justify-content-between px-5'>
                        <span>If i don't submit the assignment timely then what problem i have to face?</span>
                        <CustomToggle eventKey="1">See the answer</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse className='px-5' eventKey="1">
                        <Card.Body>TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more.TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className='d-flex align-items-center justify-content-between px-5'>
                        <span>What is the requirement to enrol in this course?</span>
                        <CustomToggle eventKey="2">See the answer</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse className='px-5' eventKey="2">
                        <Card.Body>TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className='d-flex align-items-center justify-content-between px-5'>
                        <span>How to pay the money?</span>
                        <CustomToggle eventKey="3">See the answer</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse className='px-5' eventKey="3">
                        <Card.Body>TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className='d-flex align-items-center justify-content-between px-5'>
                        <span>Is there any way to do a course second time?</span>
                        <CustomToggle eventKey="4">See the answer</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse className='px-5' eventKey="4">
                        <Card.Body>TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className='d-flex align-items-center justify-content-between px-5'>
                        <span>Is AI course available now?</span>
                        <CustomToggle eventKey="5">See the answer</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse className='px-5' eventKey="5">
                        <Card.Body>TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Faq;