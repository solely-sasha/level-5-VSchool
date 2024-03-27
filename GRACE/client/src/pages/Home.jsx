import car from "../assets/car.png";
import connecting from "../assets/connecting.png";
import handshake from "../assets/handshake.png";
import giving from "../assets/giving.png";

export default function Home() {
  return (
    <div className="bg-slate-600">
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">
              Giving GRACE is What We Do
            </p>
            <p className="mt-6 mb-4 text-lg leading-8 text-slate-900 ">
              With a network of resources and fellow volunteers, it's simple to
              extend kindness to neighbors and build a stronger, more supportive
              community.
            </p>
          </div>

          <div className="bg-green-300/75 p-2  rounded-md shadow-lg shadow-slate-900">
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl mb-16 ">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900">
                      <img src={connecting} className="h-9 w-9 contrast-200" />
                    </div>
                    Addressing Food Insecurity
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-slate-600">
                    We connect individuals and families in need with local
                    pantries and resources
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900">
                      <img src={car} className="h-9 w-9 " />
                    </div>
                    Resource Sharing
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Facilitate sharing of resources
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900">
                      <img src={handshake} className="h-9 w-9" />
                    </div>
                    Empowerment Initiatives
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Empower individuals and families to overcome challenges by
                    providing a platform for collaborative efforts, where
                    community members actively participate in initiatives that
                    uplift and support one another.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900">
                      <img src={giving} className="h-9 w-9" />
                    </div>
                    Community Building
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    foster a sense of community by encouraging volunteer
                    services and donations to support those facing challenges
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
