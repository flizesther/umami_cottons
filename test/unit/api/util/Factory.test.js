import Factory from '~/api/util/Factory'
import Category from '~/api/domain/Category'
import Fabric from '~/api/domain/Fabric'
import Media from '~/api/domain/Media'
import Pack from '~/api/domain/Pack'
import Product from '~/api/domain/Product'
import Size from '~/api/domain/Size'
import Stock from '~/api/domain/Stock'
import User from '~/api/domain/User'

describe('Factory', () => {
  it('new', () => {
    expect(Factory.new('category', {})).toBeInstanceOf(Category)
    expect(Factory.new('fabric', {})).toBeInstanceOf(Fabric)
    expect(Factory.new('media', {})).toBeInstanceOf(Media)
    expect(Factory.new('pack', {})).toBeInstanceOf(Pack)
    expect(Factory.new('product', {})).toBeInstanceOf(Product)
    expect(Factory.new('size', {})).toBeInstanceOf(Size)
    expect(Factory.new('stock', {})).toBeInstanceOf(Stock)
    expect(Factory.new('user', {})).toBeInstanceOf(User)
  })

  it('new domain', () => {
    expect(Factory.category({})).toBeInstanceOf(Category)
    expect(Factory.fabric({})).toBeInstanceOf(Fabric)
    expect(Factory.media({})).toBeInstanceOf(Media)
    expect(Factory.pack({})).toBeInstanceOf(Pack)
    expect(Factory.product({})).toBeInstanceOf(Product)
    expect(Factory.size({})).toBeInstanceOf(Size)
    expect(Factory.stock({})).toBeInstanceOf(Stock)
    expect(Factory.user({})).toBeInstanceOf(User)
  })
})
