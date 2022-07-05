import main from './app';

main(process.argv, process.env.NODE_ENV)
  .then(process.exit);
