import * as all from "https://esm.sh/viem@2.21.47/chains";

const { ...chains } = all;
export default function getChainById(chainId: number) {
  for (const chain of Object.values(chains)) {
    if (chain.id === chainId) {
      return chain;
    }
  }
}
