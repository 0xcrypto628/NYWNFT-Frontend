"use client";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const onLogo = useCallback(() => {
    router.push("/");
  }, []);

  const logoElement = useMemo(() => {
    return (
      <img src="/logo.png" role="button" tabIndex={0} className="hover:cursor-pointer w-16 h-16" onClick={onLogo} alt="Not Found" />
    );
  }, []);

  return (
    <div className="w-full rounded-t-md border-t border-[#15BFFD44] ">
      <div className="footer__wrapper">
        <div className="footer__container">
          <footer className="">
            <div className="flex flex-col lg:flex-row justify-between gap-4 py-4">
              <div className="">
                {logoElement}
                <div className="font-small max-w-[400px] mt-3">
                  Ever dreamt of being part of the New York World?
                  NYWNFTs, the bridge between Blockchain and AI,
                  lets you own a piece of the action. Generate and mint NFTs,
                  unlocking the future of creativity in the heart of the world.
                </div>
                <div className="flex gap-3 mt-3">
                  <a href="https://x.com/nynycoins">
                    <img src="/socials/twitter.svg" alt="Not Found" />
                    </a>
                  <a href="https://t.me/+YUAQVX-sDoM1NTdh">
                    <img src="/socials/telegram.svg" alt="Not Found" />
                  </a>
                  <a href="https://discord.gg/9m4x34aRJw">
                    <img src="/socials/discord.svg" alt="Not Found" />
                  </a>
                </div>
              </div>
              <div className="font-small flex justify-start lg:gap-10 gap-4">
                <ul className="flex flex-col gap-2 lg:gap-4">
                  <li className="font-medium">Marketplace</li>
                  <li><Link href="/explore">Explore</Link></li>
                  <li><Link href="/create">Create</Link></li>
                  <li><Link href="/earn">Earn</Link></li>
                  <li><Link href="/campaigns">Campaign</Link></li>
                </ul>
                {/* <ul className="flex flex-col gap-2 lg:gap-4">
                  <li className="font-medium">Partnership</li>
                  <li><Link href="/explore" />Giveaway Collaboration</li>
                  <li><Link href="/explore" />Art Theme Collaboration</li>
                  <li><Link href="/explore" />Apply for Mod</li>
                  <li><Link href="/explore" />Apply for Ambassador</li>
                </ul> */}
                <ul className="flex flex-col gap-2 lg:gap-4">
                  <li className="font-medium">Resources</li>
                  <li><a href="https://sakais-organization.gitbook.io/nywnft-whitepaper">NYW Documentation</a></li>
                  <li><Link href="https://iili.io/29M77ZQ.png">Logo</Link></li>
                  <li><Link href="/explore">Terms of Service</Link></li>
                  <li><Link href="/explore">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="max-w-[400px] flex flex-col justify-center gap-4">
                <p className="text-[20px] font-bold">Stay in the loop</p>
                <p className="font-small">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                <div className="relative flex rounded-md">
                  <div className="rounded-l-md p-2 bg-white/10">
                    <input type="email" className="font-small border-none outline-none bg-transparent" placeholder="Enter your email address" />
                  </div>
                  <div className="inset-0 bg-light-blue rounded-r-md flex items-center px-2"><span>SUBSCRIBE</span></div>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] my-3 bg-white/10"></div>
            <p className="text-center text-[#727483]">Copyright ©2024NYWNFT. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}