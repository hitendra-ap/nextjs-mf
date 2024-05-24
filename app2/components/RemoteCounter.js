// components/RemoteCounter.js
import dynamic from 'next/dynamic';

const RemoteCounter = process.browser ? dynamic(() => import('app1/Counter'), { ssr: false }) : () => {};

const RemoteCounterComponent = () => (
  <div>
    <h1>Remote Counter Component</h1>
    <RemoteCounter />
  </div>
);

export default RemoteCounterComponent;
