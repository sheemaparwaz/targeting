if (!process.env.BUILDER_PUBLIC_KEY) {
  throw new Error(
    'Missing environment variable BUILDER_PUBLIC_KEY, signup for builder.io and add your public key to env file'
  )
}

export default {
  apiKey: "40e995d07db4497ea08a676ef278d645",
}
