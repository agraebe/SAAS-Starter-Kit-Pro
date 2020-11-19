import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';

const Wrapper1 = styled.div`
  background-color: ${colors.indigo600};
`;

const Wrapper2 = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 4rem 1rem;
  @media (min-width: ${breakpoints.small}) {
    padding: 5rem 1.5rem;
  }
  @media (min-width: ${breakpoints.large}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Header = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 800;
  color: ${colors.white};
  @media (min-width: ${breakpoints.small}) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const Span = styled.span`
  display: block;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${colors.indigo200};
`;

const Link = styled.a`
  margin-top: 2rem;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-width: 1px;
  border-color: transparent;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  color: ${colors.indigo600};
  background-color: ${colors.white};
  &:hover {
    color: ${colors.indigo500};
    background-color: ${colors.indigo50};
  }
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
    transform;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media (min-width: ${breakpoints.small}) {
    width: auto;
  }
`;

const CTASection = () => (
  <Wrapper1>
    <Wrapper2>
      <Header>
        <Span>Boost your productivity.</Span>
        <Span>Start using Workflow today.</Span>
      </Header>
      <Paragraph>
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
        sagittis vel nulla nec.
      </Paragraph>
      <Link href='#'>Sign up for free</Link>
    </Wrapper2>
  </Wrapper1>
);

export default CTASection;
