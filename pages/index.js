import Link from 'next/link';
import Layout from '../components/Layout';

const viewIndex = () =>(
  <Layout header="Next" title="Top page.">
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
    </button></Link>
  </Layout>
);

export default viewIndex
