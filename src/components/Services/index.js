import React from "react";
import { ReactComponent as Icon1 } from "../../images/svg4.svg";
import { ReactComponent as Icon2 } from "../../images/svg5.svg";
import { ReactComponent as Icon3 } from "../../images/svg6.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon as={Icon1} />
          <ServicesH2>Loans and Payments</ServicesH2>
          <ServicesP>
            With longer-tenure credit, flexible payment plan and lower equity,
            banking with us is a rewarding relationship that enables you to
            enjoy.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon as={Icon2} />
          <ServicesH2>Business Focus</ServicesH2>
          <ServicesP>
            We focus on supporting people and businesses to succeed across
            Africa, Europe, and North America.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon as={Icon3} />
          <ServicesH2>Internet Banking</ServicesH2>
          <ServicesP>
            We are all about your convenience. You can bank safely and securely
            with us from any location and on any device.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
