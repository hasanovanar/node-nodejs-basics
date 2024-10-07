const parseEnv = () => {
  const envKeyValuePairs = Object.entries(process.env);
  const filteredEnvKeyValuePairs = envKeyValuePairs.filter(([key]) =>
    key.startsWith("RSS_")
  );
  const stringifiedFilteredEnvKeyValuePairs = filteredEnvKeyValuePairs.map(
    ([key, value]) => `${key}=${value}`
  );
  const joinedPairs = stringifiedFilteredEnvKeyValuePairs.join("; ");
  console.log(joinedPairs);
};

parseEnv();
