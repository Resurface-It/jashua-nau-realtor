interface MarketData {
  city: string
  medianPrice: string
  daysOnMarket: string
  inventory: string
  priceChange: string
}

interface MarketSnapshotProps {
  data: MarketData[]
}

export default function MarketSnapshot({ data }: MarketSnapshotProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((market) => (
        <div
          key={market.city}
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            {market.city} Market
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Median Price</p>
              <p className="text-xl font-bold text-primary">{market.medianPrice}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Days on Market</p>
              <p className="text-xl font-bold text-primary">{market.daysOnMarket}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Inventory</p>
              <p className="text-xl font-bold text-primary">{market.inventory}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Price Change</p>
              <p className="text-xl font-bold text-green-600">{market.priceChange}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

