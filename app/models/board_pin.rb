# == Schema Information
#
# Table name: board_pins
#
#  id         :bigint           not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BoardPin < ApplicationRecord

  # belongs_to :board 
  # belongs_to :pin
end
