import inquirer from 'inquirer';

export const entryPoint = async () => {
  const questions = [
    {
      name: 'choice',
      type: 'list',
      message: 'Choice:',
      choices: [
        { name: 'Binance withdraw', value: 'binance' },
        { name: 'OKX withdraw', value: 'okx' },
        { name: 'Mintfun', value: 'mintfun' },
        { name: 'Bungee', value: 'bungee' },
        { name: 'Wrap eth', value: 'wrap_eth' },
        { name: 'Blur deposit', value: 'blur_deposit' },
        { name: 'ZkSync Lite deposit', value: 'zksync_lite_deposit' },
        { name: 'Base bridge', value: 'base_bridge' },
        { name: 'Zora bridge', value: 'zora_bridge' },
        { name: 'Scroll bridge', value: 'scroll_bridge' },
      ],
      loop: false,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers.choice;
};
