const AccesoriesData = [
  {
    id: 1,
    name: 'WWE watch',
    price: '123.45€',
    img: 'https://images.footballfanatics.com/wwe-merchandise/unisex-undisputed-wwe-universal-championship-watch_ss5_p-200375645+u-iktzfaqgek9u7ruyxsdf+v-weihvst5rv77ryleydqn.jpg?_hv=2&w=340'
  },
  {
    id: 2,
    name: 'Cody rhodes',
    price: '237.89€',
    img: 'https://images.footballfanatics.com/cody-rhodes/keyscaper-cody-rhodes-iphone-impact-bump-case_ss5_p-200466744+u-pcm98a8wo4xwzccpmmjp+v-etvihfbyjts4i1ip9vgz.jpg?_hv=2&w=340'
  },
  {
    id: 3,
    name: 'necklace',
    price: '102.34€',
    img: 'https://images.footballfanatics.com/roman-reigns/roman-reigns-lanyard_pi5034000_ff_5034147-2fa48bd20941b351449c_full.jpg?_hv=2&w=340'
  },
  {
    id: 4,
    name: 'WWE bag',
    price: '198.76€',
    img: 'https://images.footballfanatics.com/wrestlemania/wincraft-wrestlemania-40-clear-tote-bag_ss5_p-200500732+u-sa7vdcbnq62586th7nz7+v-5pleicwthd6srwq7vw9o.jpg?_hv=2&w=340'
  },
  {
    id: 5,
    name: 'WWE circles',
    price: '142.50€',
    img: 'https://images.footballfanatics.com/john-cena/john-cena-3-pack-friendship-bracelet-set_ss5_p-200845067+u-5lkkma1ptb5gb1kjmsu5+v-bn9umsg8kpadnomfsxac.jpg?_hv=2&w=340'
  },
  {
    id: 6,
    name: 'Super bag Rhodes',
    price: '226.70€',
    img: 'https://images.footballfanatics.com/roman-reigns/roman-reigns-duffle-bag_ss5_p-200034364+u-5qsetg4ztb4d3kjq7qnb+v-ns1wgqxnj7hq2sj0pyzp.jpg?_hv=2&w=340'
  },
  {
    id: 7,
    name: 'School Bag Rock',
    price: '174.30€',
    img: 'https://images.footballfanatics.com/wrestlemania/wincraft-wrestlemania-40-backpack_ss5_p-200500730+u-luokodfis2owpudcbgmf+v-earbshc6gm4zkvu6fykb.jpg?_hv=2&w=340'
  },
  {
    id: 8,
    name: 'Battery Bloodline',
    price: '155.65€',
    img: 'https://images.footballfanatics.com/roman-reigns/keyscaper-roman-reigns-wireless-magnetic-power-bank_ss5_p-201434960+u-aynzjhaypenz18ql15ca+v-kvoflub38blsyvpsylju.jpg?_hv=2&w=340'
  },
  {
    id: 9,
    name: 'School bag Naja Jax',
    price: '203.50€',
    img: 'https://images.footballfanatics.com/bianca-belair/bianca-belair-superstar-backpack_ss5_p-200034367+u-mqaoiflbpfnczzbk09tr+v-vu5ob8jyqhvynido51iv.jpg?_hv=2&w=340'
  },
  {
    id: 10,
    name: 'Black Necklace',
    price: '112.80€',
    img: 'https://images.footballfanatics.com/stone-cold-steve-austin/stone-cold-steve-austin-lanyard_pi5034000_ff_5034149-1ea6ff068a6dbf8cad47_full.jpg?_hv=2&w=340'
  },
  {
    id: 11,
    name: 'Super WWE battery',
    price: '134.60€',
    img: 'https://images.footballfanatics.com/wwe-merchandise/keyscaper-wwe-credit-card-power-bank_ss5_p-201434864+u-0alqkaq82ftgdneqovvp+v-a9ttutij9ctwl66ablmk.jpg?_hv=2&w=340'
  },
  {
    id: 12,
    name: 'Black bag Stone',
    price: '189.95€',
    img: 'https://images.footballfanatics.com/stone-cold-steve-austin/wincraft-stone-cold-steve-austin-drawstring-backpack_pi5074000_ff_5074510-c4ef896e4a40692142d3_full.jpg?_hv=2&w=340'
  },
  {
    id: 13,
    name: 'WWE Carcase',
    price: '147.75€',
    img: 'https://images.footballfanatics.com/wwe-merchandise/keyscaper-wwe-steel-iphone-bump-case_ss5_p-201399680+u-7c2vhv1cgscq27rp2h5t+v-gbe5vbp3lab9koqc6qgq.jpg?_hv=2&w=340'
  },
  {
    id: 14,
    name: 'Jewelry dx',
    price: '218.45€',
    img: 'https://images.footballfanatics.com/d-generation-x/d-generation-x-key-ring_pi5034000_ff_5034156-83fc5d774d6279fdfd48_full.jpg?_hv=2&w=340'
  },
  {
    id: 15,
    name: 'Red bag',
    price: '165.20€',
    img: 'https://images.footballfanatics.com/world-wrestling-entertainment-raw-womens-championship-3d-molded-title-backpack_pi4874000_ff_4874252-c4900bd6fe7796ab7333_full.jpg?_hv=2&w=340'
  },
  {
    id: 16,
    name: 'Black carcase',
    price: '192.70€',
    img: 'https://images.footballfanatics.com/nwo/keyscaper-nwo-iphone-magnetic-bump-case_ss5_p-200466850+u-3sbanajzt49cpyfjscoq+v-awdhkogepmzfblhpuixg.jpg?_hv=2&w=340'
  },
  {
    id: 17,
    name: 'White Carcase',
    price: '109.90€',
    img: 'https://images.footballfanatics.com/roman-reigns/keyscaper-roman-reigns-iphone-clear-case_ss5_p-200466759+u-3vplxxdb3uqhtro8vn6r+v-yqvjq75sfgbe4ojlako1.jpg?_hv=2&w=340'
  }
]

export default AccesoriesData