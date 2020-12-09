import memo from 'memoizee';

const fn = memo(() => console.log('hello'), { normalizer: JSON.stringify });

fn(1);
