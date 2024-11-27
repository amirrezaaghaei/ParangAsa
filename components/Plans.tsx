import { CheckIcon } from "@heroicons/react/20/solid";
import { plans } from "@/data";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Plans() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#7EDA99] to-[#87B2BD] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-primary-600">
          {plans.header.kicker}
        </h2>
        <p className="mt-2 text-balance text-4xl font-semibold leading-[1.25] sm:leading-[1.25] text-gray-900 sm:text-5xl">
          {plans.header.title}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-normal text-gray-600 sm:text-xl/8">
        {plans.header.subtitle}
      </p>
      <div className="mx-auto mt-16 grid gap-2 max-w-7xl grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:grid-cols-3">
        {plans.tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-3xl"
                : "rounded-3xl",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-primary-400" : "text-primary-600",
                "text-base/7 font-semibold text-right"
              )}
            >
              {tier.title}
            </h3>
            <h4
              id={tier.id}
              className={classNames(
                tier.featured ? "text-neutral-400" : "text-neutral-600",
                "text-xs/7 font-medium text-right"
              )}
            >
              {tier.subtitle}
            </h4>
            <p className="mt-4 flex justify-end items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-gray-400" : "text-gray-500",
                  "text-xl"
                )}
              >
                {" "}
                ساعت{" "}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-5xl font-semibold tracking-tight text-right"
                )}
              >
                {tier.tierDuration}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base/7 text-right"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex flex-row-reverse gap-x-3 text-right"
                >
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-primary-400" : "text-primary-600",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-primary-500 text-white shadow-sm hover:bg-primary-400 focus-visible:outline-primary-500"
                  : "text-neutral-600 ring-1 ring-inset ring-neutral-200 hover:ring-neutral-300 focus-visible:outline-neutral-600",
                "mt-8 block rounded-md px-4 py-3 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              تماس جهت دریافت مشاوره
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
