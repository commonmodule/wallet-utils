import * as all from "viem/chains";
import { Chain } from "viem/chains";

const { ...chains } = all;
export default function getChainById(chainId: number): Chain | undefined {
  for (const chain of Object.values(chains)) {
    if (chain.id === chainId) {
      return chain;
    }
  }
}
