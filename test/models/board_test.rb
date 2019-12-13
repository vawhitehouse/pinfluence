# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  board_name  :string           not null
#  description :string
#  private     :boolean          default(FALSE), not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
