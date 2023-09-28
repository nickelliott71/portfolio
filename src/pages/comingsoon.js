
import Image from 'next/image';
import { Container } from '../layout/LayoutStyles'


const ComingSoon = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '2em', fontSize: '2em'}}>
    <Container>
      <Image
        src="/images/website-logo.png"
        width={200}
        height={200}
        alt=""
      />
      <p>Coming soon...</p>
    </Container>
    </div>
  );
};

export default ComingSoon;
